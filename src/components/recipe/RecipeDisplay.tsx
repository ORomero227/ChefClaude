import { Recipe } from "@/types/recipe";
import RecipeIngredients from "@/components/recipe/RecipeIngredients";
import RecipeInstructions from "@/components/recipe/RecipeInstructions";
import RecipeCookTime from "@/components/recipe/RecipeCookTime";
// import RecipeActions from "@/components/recipe/RecipeActions";

type Props = {
  recipe: Recipe;
};

function RecipeDisplay({ recipe }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-gray-800">{recipe.title}</h3>
          {/* <RecipeActions /> */}
        </div>
        <p className="text-gray-600 mt-3 text-base leading-relaxed">
          {recipe.description}
        </p>
        <RecipeCookTime cookTime={recipe.cookTime} servings={recipe.servings} />
      </div>
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipeInstructions instructions={recipe.instructions} />
    </div>
  );
}

export default RecipeDisplay;
