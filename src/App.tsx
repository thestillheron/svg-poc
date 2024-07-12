import { useState } from "react";
import "./App.css";
import { Menu, MenuSelection, menuOptions } from "./Menu";

function App() {
  const [selection, setSelection] = useState<MenuSelection>("Parallel Lines");
  return (
    <div className="w-full h-full text-white">
      <Menu selection={selection} setSelection={setSelection} />
      {menuOptions.find((option) => option.title === selection)?.render()}
    </div>
  );
}

export default App;
