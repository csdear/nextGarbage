import { FC } from 'react';

// example of a conditional render ternary.
const Layout: FC<{
  condition: boolean;
}> = ({ condition }) => {
  return (
    <div>{condition ? <h1>Options A</h1> : <h1>Options B</h1>}</div>
  );
};

export default Layout;
