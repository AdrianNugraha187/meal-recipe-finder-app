import MealDetailView from "@/src/components/meal/MealDetailView";
import { getMealById } from "@/src/lib/api";
import { notFound } from "next/navigation";

interface MealDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MealDetailPage({ params }: MealDetailProps) {
  const { id } = await params;
  const data = await getMealById(id);

  if (!data.meals || data.meals.length === 0) {
    notFound();
  }

  const meal = data.meals[0];

  return (
    <main>
      <MealDetailView meal={meal} />
    </main>
  );
}
