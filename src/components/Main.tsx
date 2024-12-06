import { useState } from "react";
import IngredientsContainer from "./Ingredients/IngredientsContainer";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude } from "../api/recipeAPI";

function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main className="flex justify-center h-screen p-4 md:p-0">
      <div className="flex flex-col pt-16">
        <IngredientsContainer
          ingredients={ingredients}
          setIngredients={setIngredients}
          getRecipe={getRecipe}
        />
        {recipe && <ClaudeRecipe recipe={recipe} />}
      </div>
    </main>
  );
}

export default Main;
