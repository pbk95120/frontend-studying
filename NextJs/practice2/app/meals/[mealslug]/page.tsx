import Image from "next/image";

import styles from "@/app/meals/[mealSlug]/page.module.css";
import { getMeal } from "@/lib/getMeals";

export default function MealsDetalePage({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal = getMeal(params.mealSlug);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>TITLE</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${"EMAIL"}`}>NAME</a>
          </p>
          <p className={styles.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
}
