import React from "react";
import { ParallelLines } from "./Exercises/ParallelLines";
import { LinesWithNodes } from "./Exercises/LinesWithNodes";
import { LiveData } from "./Exercises/LiveData";

export type MenuSelection = keyof typeof menuOptions;

export const menuOptions = {
  "1. Parallel Lines": (): React.ReactNode => <ParallelLines />,
  "2. Lines With Nodes": (): React.ReactNode => <LinesWithNodes />,
  "3. Live Data": (): React.ReactNode => <LiveData />,
} as const;

interface Props {
  selection: MenuSelection;
  setSelection: (selection: MenuSelection) => void;
  atlassianInstance: string;
  setAtlassianInstance: (instance: string) => void;
  login: () => void;
}
export const Menu: React.FC<Props> = ({ selection, setSelection, setAtlassianInstance, atlassianInstance, login }) => {
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
      <input type="text" value={atlassianInstance} onChange={(e) => setAtlassianInstance(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};
