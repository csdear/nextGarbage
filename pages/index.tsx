import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Hello from '../src/components/hello';
import RenderCounter from '../src/components/render-counter';
import Search from '../src/components/search';
import BareBones from '../src/components/bare-bones';
import BareBonesProps from '../src/components/bare-bones-props';
import Alert from '../src/components/alert';
import PostPunk from '../src/components/post-punk';
import PicoPost from '../src/components/post-pico';
import {
  PluralityPost,
  PostIntro,
  PostMain,
  PostOutro,
} from '../src/components/post-plurality';
import Bar from '../src/components/bar';
import CountUp from '../src/components/count-up';
import LoadThemDatas from '../src/components/load-them-datas';
import BlondeGirl from '../src/components/blonde-girl';

const Index: FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  // const [isError, setIsError] = useState<boolean>(true); // hell, showError is enough for this simple demo.
  const [showError, setShowError] = useState<boolean>(true);

  const userName = 'csdear';

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
      <Link href="/grid-forged">
        <a>Grid Forged</a>
      </Link>
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
      <PluralityPost heading="The Plurality Post">
        {/* data within postIntro, PostMain, and PostOutro to be consumed
        as children, then each styled accordingly in the PluralityPost definition */}
        <div>
          <PostIntro>
            <p>
              Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas.
            </p>
          </PostIntro>
          <PostMain>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit.
              </li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </ul>
          </PostMain>
          <PostOutro>
            <p>
              Tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
          </PostOutro>
        </div>
      </PluralityPost>
      <Bar />
      <CountUp title="A Counter" initialCount={0} />
      <BareBonesProps title="FC+TS With Props" />
      <LoadThemDatas inputSearch={userName} />
      {/* <LoadThemDatas /> */}
      <BlondeGirl name="Stacy" id={123}/>
    </div>
  );
};

export default Index;
