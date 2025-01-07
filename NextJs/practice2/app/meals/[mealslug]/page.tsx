import Image from "next/image";
import { notFound } from "next/navigation";

import styles from "@/app/meals/[mealSlug]/page.module.css";
import { getMeal } from "@/lib/getMeals";

export async function generateMetadata({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    return notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealsDetalePage({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
