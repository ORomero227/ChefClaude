import IngredientsContainer from "./Ingredients/IngredientsContainer";

function Main() {
  return (
    <main className="flex justify-center h-screen p-4 md:p-0">
      <div className="flex flex-col pt-16">
        <IngredientsContainer />
        <section>Claude Recipe Section Here</section>
      </div>
    </main>
  );
}

export default Main;
