import { useState } from "react";

import "./App.css";
import Task1_randomcat from "./components/Task1_randomcat";
import Task2_fix_infinite_loop from "./components/Task2_fix_infinite_loop";

function App() {
  //Render the tasks to the screen by uncommenting them, one at a time.
  return (
    <div className="mainPageContent">
      <h1>useEffect() Practice</h1>
      {/* Uncomment only one task at a time */}

      {/* <Task1_randomcat /> */}
      {/* <Task2_fix_infinite_loop /> */}
    </div>
  );
}

export default App;
