import IngredientsInputSection from "@/components/IngredientsInputSection";
import { useState } from "react";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <IngredientsInputSection
        setIngredients={setIngredients}
        ingredients={ingredients}
      />
    </div>
  );
}
