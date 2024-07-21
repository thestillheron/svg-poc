import { useState } from "react";
import { Menu, menuOptions, MenuSelection } from "../Menu";

export function Exercises() {
  const [selection, setSelection] =
    useState<MenuSelection>("1. Parallel Lines");

  return (
    <div className="w-full h-full text-white">
      <Menu selection={selection} setSelection={setSelection} />
      {menuOptions[selection]()}
    </div>
  );
}
