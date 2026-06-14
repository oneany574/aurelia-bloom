import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { registerBookingModal } from "@/lib/booking-modal";

const inquiryTypes = [
  "Room Booking",
  "Event Booking",
  "Food Order",
  "Pool Visit",
  "General Inquiry",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  date: z.string().trim().min(1, "Select a date"),
  guests: z.coerce.number().min(1, "At least 1 guest").max(200),
  inquiryType: z.enum(inquiryTypes),
  message: z.string().trim().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

export function BookingInquiryModal() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: "Room Booking", guests: 2 },
  });

  useEffect(() => {
    return registerBookingModal((defaultType) => {
      if (defaultType && (inquiryTypes as readonly string[]).includes(defaultType)) {
        setValue("inquiryType", defaultType as (typeof inquiryTypes)[number]);
      }
      setOpen(true);
    });
  }, [setValue]);

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Inquiry received", {
      description: `Thank you ${values.name}. We'll reach out to you on ${values.phone} shortly.`,
    });
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg border-border bg-card text-foreground">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl italic">
            Reserve at <span className="text-accent">Maya Devi</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Share a few details — our team will confirm availability and call you back.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 mt-2">
          <Field label="Full name" error={errors.name?.message} className="col-span-2">
            <input {...register("name")} className={inputCls} placeholder="Your full name" />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input {...register("phone")} className={inputCls} placeholder="98XXXXXXXX" />
          </Field>
          <Field label="Date" error={errors.date?.message}>
            <input type="date" {...register("date")} className={inputCls} />
          </Field>
          <Field label="Guests" error={errors.guests?.message}>
            <input type="number" min={1} {...register("guests")} className={inputCls} />
          </Field>
          <Field label="Inquiry type" error={errors.inquiryType?.message}>
            <select {...register("inquiryType")} className={inputCls}>
              {inquiryTypes.map((t) => (
                <option key={t} value={t} className="bg-card">
                  {t}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Message" error={errors.message?.message} className="col-span-2">
            <textarea
              {...register("message")}
              rows={3}
              className={inputCls + " resize-none"}
              placeholder="Anything we should know?"
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="col-span-2 mt-2 inline-flex items-center justify-center border border-accent px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending…" : "Send inquiry"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-border pb-2 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-accent transition";

function Field({
  label,
  error,
  children,
  className = "col-span-1",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      {children}
      {error ? <span className="text-[11px] text-destructive">{error}</span> : null}
    </label>
  );
}
