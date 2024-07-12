import React from "react";
import { ParallelLines } from "./Exercises/ParallelLines";

export type MenuSelection = "Parallel Lines";
export interface MenuOption {
  title: MenuSelection;
  render: () => React.ReactNode;
}

export const menuOptions: MenuOption[] = [
  {
    title: "Parallel Lines",
    render: () => <ParallelLines />,
  },
];

interface Props {
  selection: MenuSelection;
  setSelection: (selection: MenuSelection) => void;
}
export const Menu: React.FC<Props> = ({ selection, setSelection }) => {
  return (
    <div className="p-4 flex w-full border-b-2">
      <select
        className="bg-black text-white p-2 rounded-md border border-white"
        onChange={(e) => setSelection(e.target.value as MenuSelection)}
        value={selection}
      >
        {menuOptions.map((option) => (
          <option key={option.title} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};
