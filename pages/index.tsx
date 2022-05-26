import { FC, useState, useEffect } from 'react';

import Hello from '../src/components/hello';
import RenderCounter from '../src/components/render-counter';
import Search from '../src/components/search';
import BareBones from '../src/components/bare-bones';
import Alert from '../src/components/alert';
import PostPunk from '../src/components/post-punk';

const Index: FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  // const [isError, setIsError] = useState<boolean>(true); // hell, showError is enough for this simple demo.
  const [showError, setShowError] = useState<boolean>(true);

  useEffect(() => {
    if (userInput) {
      console.log('we got input');
      setShowError(false);
      // setIsError(false);
    } else {
      setShowError(true);
      // setIsError(true);
    }
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
    </div>
  );
};

export default Index;
