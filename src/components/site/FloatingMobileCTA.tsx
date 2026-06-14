import { Phone, Utensils, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/site";
import { openBookingModal } from "@/lib/booking-modal";

export function FloatingMobileCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="mb-3 grid grid-cols-3 gap-2 rounded-md border border-border/60 bg-background/90 backdrop-blur-md p-2 shadow-lg">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center gap-1 py-2 text-[10px] uppercase tracking-[0.2em] text-cream"
        >
          <Phone size={16} strokeWidth={1.4} className="text-accent" />
          Call
        </a>
        <a
          href={`tel:${siteConfig.foodOrderNumbers[0]}`}
          className="flex flex-col items-center gap-1 py-2 text-[10px] uppercase tracking-[0.2em] text-cream border-x border-border/40"
        >
          <Utensils size={16} strokeWidth={1.4} className="text-accent" />
          Order
        </a>
        <button
          onClick={() => openBookingModal()}
          className="flex flex-col items-center gap-1 py-2 text-[10px] uppercase tracking-[0.2em] text-cream"
        >
          <CalendarCheck size={16} strokeWidth={1.4} className="text-accent" />
          Book
        </button>
      </div>
    </motion.div>
  );
}
