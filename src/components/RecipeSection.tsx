import { ChefHat } from "lucide-react";
import RecipeDisplay from "@/components/RecipeDisplay";
import { Progress } from "@/components/ui/progress";

type RecipeSectionProps = {
  loading?: boolean;
  recipe: string;
  progress: number;
};

export default function RecipeSection(props: RecipeSectionProps) {
  const { loading, recipe, progress } = props;
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-black">Suggested Recipe</h2>
      {loading ? (
        // Show loading state with progress bar
        <div className="mt-6">
          <p className="text-sm text-gray-500">Generating recipe</p>
          <Progress value={progress} className="w-full" />
        </div>
      ) : recipe ? (
        // Display the recipe if it exists
        <RecipeDisplay recipe={recipe} />
      ) : (
        // Empty state when no recipe is generated
        <div className="text-center text-gray-500 mt-6 flex flex-col gap-2 items-center">
          <ChefHat className="size-10" />
          <p className="text-sm">
            Enter one or more ingredients above and click the "Generate Recipe"
            button to see a suggestion!
          </p>
        </div>
      )}
    </div>
  );
}
