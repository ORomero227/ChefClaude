import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

interface FormData {
  ingredient: string;
}

type Props = {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  setIngredients: Dispatch<SetStateAction<string[]>>;
};

function IngredientForm({ setFormData, setIngredients, formData }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.ingredient) return alert("An ingredient must be provided");

    setIngredients((prevIngredients) => [
      ...prevIngredients,
      formData.ingredient,
    ]);

    setFormData({ ingredient: "" });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        name="ingredient"
        value={formData.ingredient}
        onChange={handleChange}
        className="w-full mb-2 md:w-96 md:mb-0 md:mr-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="e.g. Oregano"
      />

      <button
        className="w-full md:w-auto rounded-md bg-[#141413] px-2.5 py-1 border border-transparent text-center text-sm text-white font-medium hover:bg-slate-900 disabled:pointer-events-none"
        type="submit"
      >
        + Add Ingredient
      </button>
    </form>
  );
}

export default IngredientForm;
