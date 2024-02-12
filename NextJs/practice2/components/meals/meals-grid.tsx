import { MealsGridProps } from "@/types/type";
import styles from "./meals-grid.module.css";
import MealItem from "@/components/meals/meal-item";

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
