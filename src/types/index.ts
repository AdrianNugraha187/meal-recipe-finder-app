export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strSource: string | null;
  dateModified: string | null;
  // Menangani semua strIngredient, strMeasure, dan field opsional API lainnya tanpa komplain
  [key: string]: string | null | undefined;
};

export type MealResponse = {
  meals: Meal[] | null;
};
