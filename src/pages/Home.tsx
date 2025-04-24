import IngredientsInputSection from "@/components/IngredientsInputSection";
import RecipeSection from "@/components/RecipeSection";
import { Recipe } from "@/types/recipe";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <IngredientsInputSection
          setLoading={setLoading}
          setProgress={setProgress}
          setRecipe={setRecipe}
        />
        <RecipeSection loading={loading} recipe={recipe} progress={progress} />
      </div>
    </div>
  );
}
