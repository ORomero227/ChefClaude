import NavbarLink from "@/components/navbar/NavbarLink";
import React from "react";

type NavbarProps = {
  links: {
    to: string;
    name: string;
    Icon?: React.ElementType;
  }[];
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="flex items-center">
      {links.map((link, index) => (
        <NavbarLink
          key={index}
          to={link.to}
          name={link.name}
          Icon={link.Icon}
        />
      ))}
    </nav>
  );
}
