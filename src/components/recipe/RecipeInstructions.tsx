export default function RecipeInstructions({
  instructions,
}: {
  instructions: string[];
}) {
  return (
    <div>
      <h4 className="font-medium border-b border-[#e0d8c7] pb-2 mb-2">
        Instructions
      </h4>
      <ol className="space-y-3">
        {instructions.map((step, index) => (
          <li key={index} className="flex">
            <span className="font-medium mr-2">{index + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
