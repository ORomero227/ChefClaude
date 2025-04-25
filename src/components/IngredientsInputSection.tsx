import IngredientForm from "@/components/ingredient/IngredientForm";
import IngredientsList from "@/components/ingredient/IngredientList";
import GenerateRecipeCallout from "@/components/GenerateRecipeCallout";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import { generateRecipe } from "@/lib/recipeUtils";
import { Recipe } from "@/types/recipe";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { X } from "lucide-react";

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
  const navigate = useNavigate();

  async function handleGenerateRecipe() {
    await generateRecipe(
      ingredients,
      setLoading,
      setProgress,
      setRecipe,
      navigate
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 lg:max-h-fit">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
        <span className="bg-[#22c55e]/10 p-2 rounded-lg mr-3">
          <span className="text-[#22c55e] text-xl">🥕</span>
        </span>
        Pantry
      </h2>
      <div className="mt-4">
        <IngredientForm setIngredients={setIngredients} />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium mb-2">Ingredients You Added:</h3>
          {ingredients.length > 0 && (
            <Badge
              variant={"secondary"}
              className="text-sm flex items-center gap-1 pr-1"
            >
              <Button
                variant={"ghost"}
                size="icon"
                className="w-4 h-4"
                onClick={() => setIngredients([])}
              >
                <X className="w-3 h-3" />
              </Button>
              Remove All
            </Badge>
          )}
        </div>
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
