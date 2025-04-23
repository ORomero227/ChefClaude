export default function RecipeIngredients({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <div>
      <h4 className="font-medium border-b pb-2 mb-2">Ingredients</h4>
      <ul className="space-y-1">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
