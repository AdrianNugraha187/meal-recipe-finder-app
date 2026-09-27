import { Meal } from "@/src/types";
import Image from "next/image";

interface MealDetailViewProps {
  meal: Meal;
}

export default function MealDetailView({ meal }: MealDetailViewProps) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure: measure ? measure.trim() : "",
      });
    }
  }

  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{meal.strMeal}</h1>

      <div className="flex gap-2 text-sm text-gray-500">
        <span>{meal.strCategory}</span>
        <span>•</span>
        <span>{meal.strArea}</span>
      </div>

      <div className="relative w-full h-80">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Bahan-bahan</h2>
        <ul className="list-disc pl-5 space-y-1">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Instruksi</h2>
        <p className="whitespace-pre-line leading-relaxed text-gray-700">
          {meal.strInstructions}
        </p>
      </section>
    </article>
  );
}
