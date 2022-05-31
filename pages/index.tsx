import { FC, useState, useEffect } from 'react';

import Hello from '../src/components/hello';
import RenderCounter from '../src/components/render-counter';
import Search from '../src/components/search';
import BareBones from '../src/components/bare-bones';
import Alert from '../src/components/alert';
import PostPunk from '../src/components/post-punk';
import PicoPost from '../src/components/post-pico';

const Index: FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  // const [isError, setIsError] = useState<boolean>(true); // hell, showError is enough for this simple demo.
  const [showError, setShowError] = useState<boolean>(true);

  useEffect(() => {
    userInput ? setShowError(false) : setShowError(true);
  }, [userInput]);

  const handleInputChange = input => {
    console.log('handling change to input :', input);
    setUserInput(input);

    // setIsError(false);
  };

  return (
    <div>
      <h1>Garbage.</h1>
      <Hello />
      <RenderCounter />
      <Search />
      <BareBones />
      {showError && <Alert />}

      <input
        // className={styles["alert__input"]}
        // placeholder="Enter here to dismiss alert"
        data-testid={'alert__input'}
        onChange={e => handleInputChange(e.target.value)}
        value={userInput}
      />
      <h3>{userInput}</h3>
      <PostPunk title="Cool World">
        <small> ~This~ Data from HoC as Children...</small>
      </PostPunk>
      <PicoPost heading="PicoPost">
        {/* typescript error so had to wrap this in a DIV to it to work. Eg "This JSX tag's 'children' prop expects a single child of type 'Element', but multiple children were provided." */}
        <div>
          <p>Children and Styling Best Practice Demo.</p>
          <p>We are passed in </p>
          <p>As Children</p>
        </div>
      </PicoPost>
    </div>
  );
};

export default Index;
