"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./getMeals";

function isInvalidText(text: FormDataEntryValue | null) {
  return !text || text === "";
}

export async function shareMeal(formData: any) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email?.toString().includes("@") ||
    !meal.image
  ) {
    return {
      message: "Invalid input.",
    };
  }
  await saveMeal(meal);
  redirect("/meals");
}
