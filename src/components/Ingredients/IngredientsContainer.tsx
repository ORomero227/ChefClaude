import { useState } from "react";
import IngredientsList from "./IngredientsList";
import GenerateRecipeButton from "../GenerateRecipeButton";
import IngredientForm from "./IngredientForm";

type Props = {
  toggleRecipeShown: () => void;
};

interface FormData {
  ingredient: string;
}

const MIN_INGREDIENTS = 4;

function IngredientsContainer({ toggleRecipeShown }: Props) {
  const [ingredients, setIngredients] = useState<string[]>([]);
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
          <GenerateRecipeButton toggleRecipeShown={toggleRecipeShown} />
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
