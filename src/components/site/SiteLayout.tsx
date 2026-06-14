import { type ReactNode } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BookingInquiryModal } from "@/components/site/BookingInquiryModal";
import { FloatingMobileCTA } from "@/components/site/FloatingMobileCTA";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <main className="relative bg-background text-foreground min-h-screen">
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingMobileCTA />
        <BookingInquiryModal />
      </main>
    </SmoothScroll>
  );
}
