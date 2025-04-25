import { ChefHat } from "lucide-react";
import RecipeDisplay from "@/components/recipe/RecipeDisplay";
import { Progress } from "@/components/ui/progress";
import { Recipe } from "@/types/recipe";

type RecipeSectionProps = {
  loading?: boolean;
  recipe: Recipe | null;
  progress: number;
};

export default function RecipeSection(props: RecipeSectionProps) {
  const { loading, recipe, progress } = props;
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      {loading ? (
        // Show loading state with progress bar
        <div className="mt-6">
          <p className=" text-gray-500 text-center">Generating recipe</p>
          <Progress value={progress} className="w-full" />
        </div>
      ) : recipe ? (
        // Display the recipe if it exists
        <RecipeDisplay recipe={recipe} />
      ) : (
        // Empty state when no recipe is generated
        <div className="text-center text-gray-500 mt-6 flex flex-col gap-2 items-center">
          <ChefHat className="size-10" />
          <p className="max-w-sm">
            Enter one or more ingredients and click the "Generate Recipe" button
            to see a suggestion!
          </p>
        </div>
      )}
    </div>
  );
}
