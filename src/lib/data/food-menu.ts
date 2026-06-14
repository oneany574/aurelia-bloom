import diningImg from "@/assets/dining.jpg";
import ritualImg from "@/assets/ritual.jpg";
import spaImg from "@/assets/spa.jpg";

export type FoodCategory =
  | "Snacks"
  | "Nepali Khana Set"
  | "Momo"
  | "Chowmein"
  | "Fried Rice"
  | "Drinks"
  | "Family Combos"
  | "Special Resort Items";

export const foodCategories: FoodCategory[] = [
  "Snacks",
  "Nepali Khana Set",
  "Momo",
  "Chowmein",
  "Fried Rice",
  "Drinks",
  "Family Combos",
  "Special Resort Items",
];

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: FoodCategory;
  image: string;
};

export const foodItems: FoodItem[] = [
  { id: "1", name: "Veg Momo", description: "Steamed dumplings with fresh seasonal vegetables and house chutney.", price: "Rs. 180", category: "Momo", image: diningImg },
  { id: "2", name: "Chicken Momo", description: "Juicy chicken filling, slow-steamed and served with spicy achar.", price: "Rs. 220", category: "Momo", image: ritualImg },
  { id: "3", name: "Nepali Thakali Set", description: "Daal, bhat, tarkari, achar and a daily curry — a complete plate.", price: "Rs. 350", category: "Nepali Khana Set", image: spaImg },
  { id: "4", name: "Chicken Chowmein", description: "Wok-tossed noodles with vegetables and tender chicken.", price: "Rs. 250", category: "Chowmein", image: diningImg },
  { id: "5", name: "Veg Fried Rice", description: "Light, fragrant rice tossed with garden vegetables.", price: "Rs. 200", category: "Fried Rice", image: ritualImg },
  { id: "6", name: "French Fries", description: "Crisp golden fries served warm with ketchup.", price: "Rs. 150", category: "Snacks", image: spaImg },
  { id: "7", name: "Lemon Iced Tea", description: "Refreshing house tea with a hint of lemon and mint.", price: "Rs. 120", category: "Drinks", image: diningImg },
  { id: "8", name: "Family Combo Platter", description: "A generous mix of momo, chowmein, rice and drinks — perfect for sharing.", price: "Rs. 1,200", category: "Family Combos", image: ritualImg },
  { id: "9", name: "Resort Special Khaja Set", description: "Maya Devi's signature snack platter with chiura, achar and local favorites.", price: "Rs. 450", category: "Special Resort Items", image: spaImg },
];
