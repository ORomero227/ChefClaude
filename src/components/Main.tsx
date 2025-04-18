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
    <>
      <IngredientsContainer
        ingredients={ingredients}
        setIngredients={setIngredients}
        getRecipe={getRecipe}
      />
      {loading ? <Skeleton /> : recipe && <ClaudeRecipe recipe={recipe} />}
    </>
  );
}

export default Main;
