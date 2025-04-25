import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { toast } from "sonner";

type IngredientFormProps = {
  setIngredients: Dispatch<SetStateAction<string[]>>;
};

function IngredientForm(props: IngredientFormProps) {
  const { setIngredients } = props;
  const [formData, setFormData] = useState({ ingredient: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const ingredient = formData.ingredient.trim().toLowerCase();

    if (!ingredient) {
      toast.error("Please enter an ingredient");
      return;
    }

    setIngredients((prev) => {
      if (prev.includes(ingredient)) {
        toast.error("Ingredient already added");
        return prev;
      }

      toast.success("Ingredient added successfully");

      return [...prev, ingredient];
    });

    setFormData({ ingredient: "" });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="flex items-center">
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full">
          <Input
            type="text"
            placeholder="Write an ingredient"
            name="ingredient"
            value={formData.ingredient}
            onChange={handleChange}
            className="focus-visible:ring-[#22c55e]/50"
          />
          <Button type="submit" className="w-full md:w-auto bg-[#22c55e]">
            Add <Plus />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default IngredientForm;
