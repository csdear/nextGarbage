import { FC } from "react";

const Hello: FC = () => {
  const name = 'x';

  return (
    <div>
      <h1>hello {name} </h1>
    </div>
  );
};

export default Hello;