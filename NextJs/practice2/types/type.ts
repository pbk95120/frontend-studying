import { ReactNode } from "react";

export type LayoutType = {
  children: ReactNode;
};

export interface NavType {
  href: string;
  children: ReactNode;
}

export interface MealsType {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface MealsGridProps {
  meals: MealsType[];
}
