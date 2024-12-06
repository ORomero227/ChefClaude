type Props = {
  recipe: string;
};

function ClaudeRecipe({ recipe }: Props) {
  return <section className="max-w-xl">{recipe}</section>;
}

export default ClaudeRecipe;
