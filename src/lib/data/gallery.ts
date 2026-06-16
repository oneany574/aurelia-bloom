import heroImg from "@/assets/hero.jpg";
import spaImg from "@/assets/spa.jpg";
import suiteImg from "@/assets/suite.jpg";
import diningImg from "@/assets/dining.jpg";
import natureImg from "@/assets/nature.jpg";
import saunaImg from "@/assets/sauna.jpg";
import ritualImg from "@/assets/ritual.jpg";

export type GalleryCategory = "Resort" | "Pool" | "Food" | "Events" | "Guests" | "Celebrations";

export const galleryCategories: GalleryCategory[] = [
  "Resort",
  "Pool",
  "Food",
  "Events",
  "Guests",
  "Celebrations",
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
  date: string; // ISO yyyy-mm-dd
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: heroImg, alt: "Maya Devi Resort exterior at dusk", category: "Resort", caption: "Arrival at dusk", date: "2025-03-12" },
  { id: "g2", src: natureImg, alt: "Lush nature around the resort", category: "Resort", caption: "Garden walk", date: "2025-02-04" },
  { id: "g3", src: suiteImg, alt: "Comfortable resort room", category: "Resort", caption: "Deluxe suite", date: "2024-11-22" },
  { id: "g4", src: spaImg, alt: "Pool and leisure area", category: "Pool", caption: "Morning poolside", date: "2025-04-09" },
  { id: "g5", src: saunaImg, alt: "Poolside relaxation", category: "Pool", caption: "Sunset cabanas", date: "2024-12-18" },
  { id: "g6", src: diningImg, alt: "Fresh resort dining", category: "Food", caption: "Chef's tasting menu", date: "2025-01-27" },
  { id: "g7", src: ritualImg, alt: "Special resort dish", category: "Food", caption: "Signature plating", date: "2024-10-30" },
  { id: "g8", src: heroImg, alt: "Event setup at the resort", category: "Events", caption: "Annual conference setup", date: "2025-02-21" },
  { id: "g9", src: suiteImg, alt: "Guests enjoying their stay", category: "Guests", caption: "Family stay", date: "2024-12-05" },
  { id: "g10", src: natureImg, alt: "Celebration evening at Maya Devi", category: "Celebrations", caption: "Anniversary night", date: "2025-03-30" },
  { id: "g11", src: diningImg, alt: "Family dining moment", category: "Guests", caption: "Sunday brunch", date: "2025-01-12" },
  { id: "g12", src: spaImg, alt: "Birthday celebration setup", category: "Celebrations", caption: "Birthday under the lights", date: "2024-11-08" },
];

export function formatGalleryDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
