export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strSource: string | null;
  dateModified: string | null;
};

export type MealResponse = {
  meals: Meal[] | null;
};
