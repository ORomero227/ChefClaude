type Props = {};

function ClaudeRecipe({}: Props) {
  return (
    <section className="max-w-xl">
      <h3 className="text-3xl font-inter font-semibold">Suggested Recipe:</h3>
      <article className="font-inter text-[#475467] leading-7 text-lg font-normal">
        <p className="my-6 text-pretty">
          Based on the ingredients you have available, I would recommend making
          a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is
          the recipe:
        </p>

        <p className="text-xl font-bold my-4">Ingredients:</p>
        <ul className="p-2 list-none leading-loose">
          <li>1 lb. ground beef</li>
          <li>1 onion, diced</li>
          <li>3 cloves garlic, minced</li>
          <li>2 tablespoons tomato paste</li>
          <li>1 (28 oz) can crushed tomatoes</li>
          <li>1 cup beef broth</li>
          <li>1 teaspoon dried oregano</li>
          <li>1 teaspoon dried basil</li>
          <li>Salt and pepper to taste</li>
          <li>
            8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
          </li>
        </ul>

        <p className="text-xl font-bold my-4">Instructions:</p>
        <ol className="p-2 list-decimal list-inside text-pretty">
          <li className="mb-4">
            Bring a large pot of salted water to a boil for the pasta.
          </li>
          <li className="mb-4">
            In a large skillet or Dutch oven, cook the ground beef over
            medium-high heat, breaking it up with a wooden spoon, until browned
            and cooked through, about 5-7 minutes.
          </li>
          <li className="mb-4">
            Add the diced onion and minced garlic to the skillet and cook for
            2-3 minutes, until the onion is translucent.
          </li>
          <li className="mb-4">
            Stir in the tomato paste and cook for 1 minute.
          </li>
          <li className="mb-4">
            Add the crushed tomatoes, beef broth, oregano, and basil. Season
            with salt and pepper to taste.
          </li>
          <li className="mb-4">
            Reduce the heat to low and let the sauce simmer for 15-20 minutes,
            stirring occasionally, to allow the flavors to meld.
          </li>
          <li className="mb-4">
            While the sauce is simmering, cook the pasta according to the
            package instructions. Drain the pasta and return it to the pot.
          </li>
          <li className="mb-4">
            Add the Bolognese sauce to the cooked pasta and toss to combine.
          </li>
          <li className="mb-4">
            Serve hot, garnished with additional fresh basil or grated Parmesan
            cheese if desired.
          </li>
        </ol>
      </article>
    </section>
  );
}

export default ClaudeRecipe;
