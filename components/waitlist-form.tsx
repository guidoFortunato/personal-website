"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const PROJECT_TYPE_VALUES = [
  "ecommerce",
  "website",
  "landing",
  "mobile_app",
  "other",
] as const;

function createWaitlistSchema(
  t: (key: string) => string,
) {
  return z
    .object({
      full_name: z.string().min(2, t("Validation.fullNameMin")),
      email: z.string().email(t("Validation.emailInvalid")),
      confirm_email: z.string().email(t("Validation.emailInvalid")),
      project_type: z.enum(PROJECT_TYPE_VALUES, {
        error: t("Validation.projectTypeRequired"),
      }),
      project_description: z
        .string()
        .min(10, t("Validation.projectDescriptionMin")),
    })
    .refine((data) => data.email === data.confirm_email, {
      message: t("Validation.emailsNoMatch"),
      path: ["confirm_email"],
    });
}

type WaitlistValues = z.infer<
  ReturnType<typeof createWaitlistSchema>
>;

export default function WaitlistForm() {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const waitlistSchema = createWaitlistSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      full_name: "",
      email: "",
      confirm_email: "",
      project_type: "" as WaitlistValues["project_type"],
      project_description: "",
    },
  });

  const onSubmit = async (data: WaitlistValues) => {
    try {
      setLoading(true);

      const { error: insertError } = await supabase
        .from("client_leads")
        .insert({
          full_name: data.full_name,
          email: data.email,
          project_type: data.project_type,
          project_description: data.project_description,
        });

      if (insertError) {
        // 23505 = unique_violation: el email ya existe en la tabla
        if (insertError.code === "23505") {
          toast.error(t("Toasts.emailAlreadyRegistered"));
        } else {
          toast.error(t("Toasts.error"));
        }
        return;
      }

      toast.success(t("Toasts.success"));
      reset();
    } catch {
      toast.error(t("Toasts.error"));
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
      <div>
        <label htmlFor="full_name" className="sr-only">
          {t("Form.fullName")}
        </label>
        <input
          {...register("full_name")}
          id="full_name"
          type="text"
          placeholder={t("Form.fullNamePlaceholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          {t("Form.email")}
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder={t("Form.emailPlaceholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="confirm_email" className="sr-only">
          {t("Form.confirmEmail")}
        </label>
        <input
          {...register("confirm_email")}
          id="confirm_email"
          type="email"
          placeholder={t("Form.confirmEmailPlaceholder")}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="project_type" className="sr-only">
          {t("Form.projectType")}
        </label>
        <select
          {...register("project_type")}
          id="project_type"
          className={`${inputClass} appearance-none cursor-pointer [&>option]:bg-[#0a0a0a] [&>option]:text-white`}
        >
          <option value="">{t("Form.projectTypePlaceholder")}</option>
          <option value="ecommerce">{t("Form.projectTypeEcommerce")}</option>
          <option value="website">{t("Form.projectTypeWebsite")}</option>
          <option value="landing">{t("Form.projectTypeLanding")}</option>
          <option value="mobile_app">{t("Form.projectTypeMobile")}</option>
          <option value="other">{t("Form.projectTypeOther")}</option>
        </select>
      </div>

      <div>
        <label htmlFor="project_description" className="sr-only">
          {t("Form.projectDescription")}
        </label>
        <textarea
          {...register("project_description")}
          id="project_description"
          rows={4}
          placeholder={t("Form.projectDescriptionPlaceholder")}
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-white hover:cursor-pointer text-black font-medium py-6 rounded-xl hover:bg-slate-200 active:scale-[0.98] transition-all duration-200"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t("Form.submitting")}
          </>
        ) : (
          t("Form.submit")
        )}
      </Button>
    </form>
  );
}
