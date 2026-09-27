import { MealResponse } from "@/src/types";
import MealItem from "./MealItem";
import SearchBar from "../common/SearchBar";

interface MealListProps {
  data: MealResponse;
}

export default function MealList({ data }: MealListProps) {
  if (data.meals?.length === 0) {
    <h1>Tidak ada Resep</h1>;
  }
  return (
    <div>
      <SearchBar />
      {data.meals?.map((item) => (
        <MealItem key={item.idMeal} meal={item} />
      ))}
    </div>
  );
}
