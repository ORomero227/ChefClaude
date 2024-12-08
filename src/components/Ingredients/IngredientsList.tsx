type Props = {
  ingredientsList: string[];
};

function IngredientsList({ ingredientsList }: Props) {
  return (
    <div className="mt-7 w-full">
      <h2 className="mb-4 text-3xl font-inter font-semibold">
        Ingredients on hand:
      </h2>
      <ul className="mb-7 p-2 list-disc list-inside text-xl text-slate-600 leading-relaxed">
        {ingredientsList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
