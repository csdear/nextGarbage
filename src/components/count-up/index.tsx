import { FC, useState } from "react";

interface CountUpProps {
    title: string;
    initialCount: number;
}
// Above the component : imports, inferfaces, types, mini parts for children styling (see PicoPostMain)
// Within the component: use* Hooks, functions
const CountUp: FC<CountUpProps> = ({ title, initialCount,  }) => { // for props, dont forget the curlies! Or many red herring  errors occurs downstream.
  //init state at count prop passed  in or zero.
  const [count, setCount] = useState<number>(initialCount || 0);

  /* Simplist way, just for positive increment, but I prefer
  the next `add` function */
    // method 1
    // const onClickHandler = () => {
    //     setCount(count + 1);
    // }

    // method 2 - better. From gist https://gist.github.com/BretCameron/5dcbe894447c3f3abae4296c401b6559

    const onClickHandler = (factor = 1) => {
        setCount(count + factor);
      };

return (
    <div>
      <h1>{title}</h1>
      <p>Count is: {count}</p>
      <button onClick={() => onClickHandler()}>Increase count</button>
      <button onClick={() => onClickHandler(-1)}>Decrease count</button>
    </div>
);

};

export default CountUp;