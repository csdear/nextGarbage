import { FC, useEffect, useRef, useState } from "react";

// the app re-renders every time  you alter the state (userInput)
// by typing something, but chaning the refernce value (renders)
// DOES NOT  cause a re-render
// The reference’s value is persistent between the component re-renders.
// Unlike updating the state, mutating the reference, does not trigger a re-render.
// https://medium.com/@dev_one/how-to-use-the-useref-hook-dc8845350478
const RenderCounter: FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  // dont do this, this would cause an  infinite loop
    // const [renders, setRenders] = useState(0);

    // do this -->
  const renders = useRef(1);

   useEffect(() => {
       renders.current = renders.current+1;
   })

  return (
    <div>
      <input
        value={userInput} // value equal to piece of state
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>The RenderCounter component has rendered itself {renders.current} times</p>
    </div>
  );
};

export default RenderCounter;