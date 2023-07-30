import { useEffect, useState } from "react";

/*For this you will need to 'fix' the useEffect() call to avoid infinite loop. After the page is rendered, you should see the following displayed: 'Counter = 1'. Use the console in the browser to get a hint from the error message. Once you have a solution, refresh the page to see if the infinite loop has been eliminated.*/

const Task3FixAnotherInfiniteLoop = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Do not change code below this line
    if (counter < 300000) {
      setCounter((counter) => counter + 1);
      console.log(counter, "<<< counter here");
    }
    //Do not change code above this line
  }, [counter]);

  return (
    <div>
      <h2>Task 3 - Fix an infinite loop again</h2>
      <h3>Counter = {counter}</h3>
    </div>
  );
};

export default Task3FixAnotherInfiniteLoop;
