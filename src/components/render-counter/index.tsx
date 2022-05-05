import { FC } from "react";

const RenderCounter: FC = () => {
  const name = 'x';

  return (
    <div>
      <h1>hello {name} </h1>
    </div>
  );
};

export default RenderCounter;