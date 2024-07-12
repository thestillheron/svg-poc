import { useState } from "react";
import "./App.css";
import { Menu, MenuSelection, menuOptions } from "./Menu";

function App() {
  const [selection, setSelection] = useState<MenuSelection>("1. Parallel Lines");
  return (
    <div className="w-full h-full text-white">
      <Menu selection={selection} setSelection={setSelection} />
      {menuOptions[selection]()}
    </div>
  );
}

export default App;
