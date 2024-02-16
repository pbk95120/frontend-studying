import { MealsType } from "@/types/type";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<MealsType[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meal data. Please try again later.");
  return db.prepare("SELECT * FROM meals").all() as MealsType[];
}

export function getMeal(slug: string) {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as MealsType[];
}
