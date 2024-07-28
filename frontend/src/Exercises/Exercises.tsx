import { useState } from "react";
import { Menu, menuOptions, MenuSelection } from "../Menu";
import { login as jiraLogin } from "../Services/Auth";

export function Exercises() {
  const [atlassianInstance, setAtlassianInstance] = useState("");
  const [selection, setSelection] =
    useState<MenuSelection>("1. Parallel Lines");
  const login = () => jiraLogin(atlassianInstance);

  return (
    <div className="w-full h-full text-white">
      <Menu
        selection={selection}
        setSelection={setSelection}
        atlassianInstance={atlassianInstance}
        setAtlassianInstance={setAtlassianInstance}
        login={login}
      />
      {menuOptions[selection]()}
    </div>
  );
}
