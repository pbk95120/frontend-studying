import Link from "next/link";

import styles from "@/app/meals/page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/getMeals";

export default async function MealsPage() {
  const mealsData = await getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Chooser your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={mealsData} />
      </main>
    </>
  );
}
