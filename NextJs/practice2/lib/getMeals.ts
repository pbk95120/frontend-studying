import fs from "node:fs";

import { MealsType } from "@/types/type";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals(): Promise<MealsType[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meal data. Please try again later.");
  return db.prepare("SELECT * FROM meals").all() as MealsType[];
}

export function getMeal(slug: string) {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as MealsType;
}

export async function saveMeal(meal: any) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const extension = meal.image?.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const buffredImage = meal.image.arrayBuffer();

  stream.write(Buffer.from(buffredImage), (error) => {
    if (error) {
      throw new Error("Failed to save image.");
    }
  });

  meal.image = `/images/${filename}`;
  db.prepare(
    `
    INSERT INTO meals
    (title, sumaary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `
  ).run(meal);
}
