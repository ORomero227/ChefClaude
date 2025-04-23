import { Button } from "@/components/ui/button";
import React from "react";

type RecipeButtonActionProps = {
  children: React.ReactNode;
};

export default function RecipeButtonAction({
  children,
}: RecipeButtonActionProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="h-8 w-8 border-[#e0d8c7] hover:text-white hover:bg-[#D17557]"
    >
      {children}
    </Button>
  );
}
