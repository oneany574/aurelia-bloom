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
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: heroImg, alt: "Maya Devi Resort exterior at dusk", category: "Resort" },
  { id: "g2", src: natureImg, alt: "Lush nature around the resort", category: "Resort" },
  { id: "g3", src: suiteImg, alt: "Comfortable resort room", category: "Resort" },
  { id: "g4", src: spaImg, alt: "Pool and leisure area", category: "Pool" },
  { id: "g5", src: saunaImg, alt: "Poolside relaxation", category: "Pool" },
  { id: "g6", src: diningImg, alt: "Fresh resort dining", category: "Food" },
  { id: "g7", src: ritualImg, alt: "Special resort dish", category: "Food" },
  { id: "g8", src: heroImg, alt: "Event setup at the resort", category: "Events" },
  { id: "g9", src: suiteImg, alt: "Guests enjoying their stay", category: "Guests" },
  { id: "g10", src: natureImg, alt: "Celebration evening at Maya Devi", category: "Celebrations" },
  { id: "g11", src: diningImg, alt: "Family dining moment", category: "Guests" },
  { id: "g12", src: spaImg, alt: "Birthday celebration setup", category: "Celebrations" },
];
