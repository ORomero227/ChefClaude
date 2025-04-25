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
      className="size-10 rounded-full border-gray-200 text-gray-500 hover:text-primary hover:border-[#22c55e] transition-colors"
    >
      {children}
    </Button>
  );
}
