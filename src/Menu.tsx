import React from "react";
import { ParallelLines } from "./Exercises/ParallelLines";
import { LinesWithNodes } from "./Exercises/LinesWithNodes";

export type MenuSelection = keyof typeof menuOptions;

export const menuOptions = {
  "1. Parallel Lines": (): React.ReactNode => <ParallelLines />,
  "2. Lines With Nodes": (): React.ReactNode => <LinesWithNodes />,
} as const;

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
        {Object.keys(menuOptions).sort().map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
