import { useState } from "react";
import IngredientsContainer from "./Ingredients/IngredientsContainer";
import ClaudeRecipe from "./ClaudeRecipe";

function Main() {
  const [isRecipeShown, setIsRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setIsRecipeShown((prevIsRecipeShown) => !prevIsRecipeShown);
  }

  return (
    <main className="flex justify-center h-screen p-4 md:p-0">
      <div className="flex flex-col pt-16">
        <IngredientsContainer toggleRecipeShown={toggleRecipeShown} />
        {isRecipeShown && <ClaudeRecipe />}
      </div>
    </main>
  );
}

export default Main;
