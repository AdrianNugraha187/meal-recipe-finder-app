import { Meal } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

interface MealItemProps {
  meal: Meal;
}

export default function MealItem({ meal }: MealItemProps) {
  return (
    <Link href={`/makanan/${meal.idMeal}`}>
      <h1>{meal.strMeal}</h1>
      <Image
        src={meal?.strMealThumb || "meal.jpg"}
        alt={meal.idMeal}
        width={600}
        height={560}
        className="object-cover rounded-lg "
        priority
      />
      <p>
        <span>{meal.strCategory}</span> - <span>{meal.strArea}</span>
      </p>
      <p>{meal.strInstructions}</p>
      <p>{meal.strSource}</p>
      <p>{meal.dateModified}</p>
    </Link>
  );
}
