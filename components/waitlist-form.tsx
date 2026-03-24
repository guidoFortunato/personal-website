"use client";

import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, ChevronDown, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const PROJECT_TYPE_VALUES = [
  "ecommerce",
  "website",
  "landing_page",
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

const PROJECT_TYPE_OPTIONS = [
  { value: "ecommerce", labelKey: "Form.projectTypeEcommerce" },
  { value: "website", labelKey: "Form.projectTypeWebsite" },
  { value: "landing_page", labelKey: "Form.projectTypeLanding" },
  { value: "mobile_app", labelKey: "Form.projectTypeWebApp" },
  { value: "other", labelKey: "Form.projectTypeOther" },
] as const;

export default function WaitlistForm() {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const waitlistSchema = createWaitlistSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    control,
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = async (data: WaitlistValues) => {
    try {
      setLoading(true);

      const { error: insertError } = await supabase
        .from("clients")
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
    } catch (error) {
      console.log({ error });
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

      <div ref={dropdownRef} className="relative">
        <label htmlFor="project_type" className="sr-only">
          {t("Form.projectType")}
        </label>
        <Controller
          name="project_type"
          control={control}
          render={({ field }) => {
            const selected = PROJECT_TYPE_OPTIONS.find((o) => o.value === field.value);
            return (
              <>
                <button
                  id="project_type"
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={`${inputClass} flex items-center justify-between cursor-pointer`}
                >
                  <span className={selected ? "text-white" : "text-slate-500"}>
                    {selected ? t(selected.labelKey) : t("Form.projectTypePlaceholder")}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {dropdownOpen && (
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border border-white/10 bg-[#0f0f0f] py-1 shadow-xl">
                    {PROJECT_TYPE_OPTIONS.map((option) => (
                      <li key={option.value}>
                        <button
                          type="button"
                          onClick={() => {
                            field.onChange(option.value);
                            setDropdownOpen(false);
                          }}
                          className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors duration-150 cursor-pointer"
                        >
                          {t(option.labelKey)}
                          {field.value === option.value && (
                            <Check className="h-4 w-4 text-blue-400" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            );
          }}
        />
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
