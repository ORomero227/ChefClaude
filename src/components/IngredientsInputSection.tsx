import IngredientForm from "@/components/ingredients/IngredientForm";
import IngredientsList from "@/components/ingredients/IngredientsList";
import GenerateRecipeCallout from "@/components/GenerateRecipeCallout";
import { Dispatch, SetStateAction, useState } from "react";
import { generateRecipe } from "@/lib/recipeUtils";
import { Recipe } from "@/types/recipe";

type IngredientsSectionProps = {
  setRecipe: Dispatch<SetStateAction<Recipe | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setProgress: Dispatch<SetStateAction<number>>;
};

export default function IngredientsInputSection(
  props: IngredientsSectionProps
) {
  const { setLoading, setRecipe, setProgress } = props;
  const [ingredients, setIngredients] = useState<string[]>([]);

  async function handleGenerateRecipe() {
    await generateRecipe(ingredients, setLoading, setProgress, setRecipe);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm lg:max-h-fit">
      <h2 className="text-xl font-semibold text-black">Ingredients on hand</h2>
      <p className="text-sm text-gray-600 font-normal mt-2 text-pretty">
        Enter one or more ingredients and Chef Claude will recommend a recipe!
      </p>
      <div className="mt-4">
        <IngredientForm setIngredients={setIngredients} />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium mb-2">Ingredients You Added:</h3>
        <IngredientsList
          setIngredients={setIngredients}
          ingredients={ingredients}
        />
      </div>
      {ingredients.length > 0 ? (
        <GenerateRecipeCallout onClick={handleGenerateRecipe} />
      ) : (
        <p className="text-sm text-gray-500">
          Your list is empty. Add ingredients to get started!
        </p>
      )}
    </div>
  );
}
