import { Recipe } from "@/types/recipe";
import { Button } from "@/components/ui/button";
import RecipeIngredients from "@/components/recipe/RecipeIngredients";
import RecipeInstructions from "@/components/recipe/RecipeInstructions";
import RecipeCookTime from "@/components/recipe/RecipeCookTime";
import RecipeActions from "@/components/recipe/RecipeActions";
import { Bookmark } from "lucide-react";

type Props = {
  recipe: Recipe;
};

function RecipeDisplay({ recipe }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{recipe.title}</h3>
          <RecipeActions />
        </div>
        <p className="mt-2">{recipe.description}</p>
        <RecipeCookTime
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
          servings={recipe.servings}
        />
      </div>
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipeInstructions instructions={recipe.instructions} />
      <div className="pt-4">
        <Button className="w-full bg-[#D17557]">
          <Bookmark className="mr-2 size-4" /> Save Recipe
        </Button>
      </div>
    </div>
  );
}

export default RecipeDisplay;
