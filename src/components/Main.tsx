import { useState } from "react";
import IngredientsContainer from "./Ingredients/IngredientsContainer";

function Main() {
  const [isRecipeShown, setIsRecipeShown] = useState(false);

  const toggleRecipeShown = () => {
    setIsRecipeShown((prevIsRecipeShown) => !prevIsRecipeShown);
  };

  return (
    <main className="flex justify-center h-screen p-4 md:p-0">
      <div className="flex flex-col pt-16">
        <IngredientsContainer toggleRecipeShown={toggleRecipeShown} />
        {isRecipeShown && <section>Claude Recipe Section Here</section>}
      </div>
    </main>
  );
}

export default Main;
