import { useState, Dispatch, SetStateAction } from "react";
import IngredientsList from "./IngredientsList";
import GenerateRecipeButton from "../GenerateRecipeButton";
import IngredientForm from "./IngredientForm";

type Props = {
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
  getRecipe: () => void;
};

interface FormData {
  ingredient: string;
}

const MIN_INGREDIENTS = 4;

function IngredientsContainer({
  ingredients,
  setIngredients,
  getRecipe,
}: Props) {
  const [formData, setFormData] = useState<FormData>({ ingredient: "" });
  const ingredientsRequired = MIN_INGREDIENTS - ingredients.length;

  return (
    <section className="mb-16">
      <IngredientForm
        formData={formData}
        setFormData={setFormData}
        setIngredients={setIngredients}
      />

      {ingredients.length > 3 ? (
        <>
          <IngredientsList ingredientsList={ingredients} />
          <GenerateRecipeButton getRecipe={getRecipe} />
        </>
      ) : (
        <p className="mt-4 text-lg font-inter font-semibold">
          The chef needs a minimum of {ingredientsRequired} ingredients to
          suggest a recipe.
        </p>
      )}
    </section>
  );
}

export default IngredientsContainer;
