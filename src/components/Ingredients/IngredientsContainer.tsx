import { ChangeEvent, FormEvent, useState } from "react";
import IngredientsList from "./IngredientsList";

interface FormData {
  ingredient: string;
}

const MIN_INGREDIENTS = 4;

function IngredientsContainer() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormData>({ ingredient: "" });

  const ingredientsRequired = MIN_INGREDIENTS - ingredients.length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.ingredient) return alert("An ingredient must be provided");

    setIngredients((prevIngredients) => [
      ...prevIngredients,
      formData.ingredient,
    ]);

    setFormData({ ingredient: "" });
  };

  return (
    <section className="mb-10">
      <form method="post" onSubmit={handleSubmit}>
        <input
          name="ingredient"
          value={formData.ingredient}
          onChange={handleChange}
          className="w-full mb-2 md:w-96 md:mb-0 md:mr-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="e.g. Oregano"
        />

        <button
          className="w-full md:w-auto rounded-md bg-[#141413] px-2.5 py-1 border border-transparent text-center text-sm text-white font-medium hover:bg-slate-900 disabled:pointer-events-none"
          type="submit"
        >
          + Add Ingredient
        </button>
      </form>

      {ingredients.length > 3 ? (
        <IngredientsList ingredientsList={ingredients} />
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
