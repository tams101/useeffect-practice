import { useState } from "react";

import "./App.css";
import Task1RandomCat from "./components/Task1_random_cat";
import Task2FixInfiniteLoop from "./components/Task2_fix_infinite_loop";
import Task3FixAnotherInfiniteLoop from "./components/Task3_fix_another_infinite_loop";
import Task4TriggerWithAllButtons from "./components/Task4_trigger_with_all_buttons";

function App() {
  //Render the tasks to the screen by uncommenting them, one at a time.
  return (
    <div className="mainPageContent">
      <h1>useEffect() Practice</h1>
      {/* Uncomment only one task at a time */}

      {/* <Task1RandomCat /> */}
      {/* <Task2FixInfiniteLoop /> */}
      {/* <Task3FixAnotherInfiniteLoop /> */}
      {/* <Task4TriggerWithAllButtons /> */}
    </div>
  );
}

export default App;
