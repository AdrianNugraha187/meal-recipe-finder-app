import { MealResponse } from "../types";

const BASE_URL = "https://themealdb.com/api/json/v1/1";

async function fetcher<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Cukup satu fungsi untuk fetch semua atau berdasarkan pencarian
export async function getMeals(query: string = ""): Promise<MealResponse> {
  return fetcher<MealResponse>(`/search.php?s=${encodeURIComponent(query)}`);
}

export async function getMealById(id: string): Promise<MealResponse> {
  return fetcher<MealResponse>(`/lookup.php?i=${encodeURIComponent(id)}`);
}
