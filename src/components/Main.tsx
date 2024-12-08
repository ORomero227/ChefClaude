import { useState } from "react";
import IngredientsContainer from "./Ingredients/IngredientsContainer";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude } from "../api/recipeApi";
import Skeleton from "./Skeleton";

function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  async function getRecipe() {
    setLoading((prevLoading) => !prevLoading);
    try {
      const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
      setRecipe(recipeMarkdown);
    } finally {
      setLoading((prevLoading) => !prevLoading);
    }
  }

  return (
    <main className="flex justify-center max-w-xl mx-auto min-h-screen p-4 md:p-0">
      <div className="flex flex-col pt-16 w-full">
        <IngredientsContainer
          ingredients={ingredients}
          setIngredients={setIngredients}
          getRecipe={getRecipe}
        />
        {loading ? <Skeleton /> : recipe && <ClaudeRecipe recipe={recipe} />}
      </div>
    </main>
  );
}

export default Main;
