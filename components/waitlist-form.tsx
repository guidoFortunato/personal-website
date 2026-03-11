"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const waitlistSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

type WaitlistValues = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: WaitlistValues) => {
    try {
      setLoading(true);
      // Simulation of API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Welcome! You've been added to the waitlist.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Trigger toast for validation errors if they exist and are new
  const onError = () => {
    if (errors.email) {
      toast.error(errors.email.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200"
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
            Processing...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>
    </form>
  );
}
