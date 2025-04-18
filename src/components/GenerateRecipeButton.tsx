type Props = {
  getRecipe: () => void;
};

function GenerateRecipeButton({ getRecipe }: Props) {
  return (
    <div className="p-7 flex flex-col md:flex-row justify-between items-center rounded-lg bg-[#f0efeb]">
      <div>
        <h3 className="text-lg font-medium font-inter leading-6">
          Ready for a recipe?
        </h3>
        <p className="text-sm leading-5 text-[#6b7280]">
          Generate a recipe from your list of ingredients
        </p>
      </div>
      <button
        onClick={getRecipe}
        className="w-full mt-3 md:w-auto md:mt-0 px-[17px] py-[9px] bg-[#D17557] border-none rounded-md font-inter font-medium text-sm text-[#fafaf8] cursor-pointer shadow-xs"
      >
        Get Recipe
      </button>
    </div>
  );
}

export default GenerateRecipeButton;
