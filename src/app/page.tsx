import MealList from "../components/meal/MealList";
import { getMeals } from "../lib/api";

interface HomePageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q;

  const data = await getMeals(query);
  return (
    <div>
      <MealList data={data} />
    </div>
  );
}
