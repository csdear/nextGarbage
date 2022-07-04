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
import ImageList from '../src/components/image-list';
import WizardBio from '../src/components/wizard-bio';
import AgeCounter from '../src/components/age-counter';
/**
 * LIT2A: Import of the components, mock data json file, and instantiation of Simplelist and prop passed.
 * Next, see LIT3: mockData/todos.json.   
 */
import SimpleList from '../src/components/simple-list';
import todoData from '../src/mockData/todos.json';
import Box from '../src/components/box';

const Index: FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  // const [isError, setIsError] = useState<boolean>(true); // hell, showError is enough for this simple demo.
  const [showError, setShowError] = useState<boolean>(true);

  const userName = 'csdear';
  //prop passed in will be something like  .....
  const imageData = [{"url":"https://i.imgur.com/WiVhNzA.png","description":"A-10 warthog","featured":true,"id":"001"},
  {"url":"https://i.imgur.com/V86wcMO.png","description":"Steam Engine","featured":false,"id":"002"},
  {"url":"https://i.imgur.com/6i6VCLD.png","description":"Corvette Stingray","featured":false,"id":"003"}];

  const list = ['a', 'b', 'c'];

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
      <ImageList images={imageData} />
      <WizardBio name='Elmonster' age={42}>
        <div><h1>Wizard Bio</h1></div>
      </WizardBio>
      <br />
      <AgeCounter initAge={5} />
      {/* LIT2A: SimpleList instantiation and mock data passed in as a prop */}
      <SimpleList listItems={todoData} />
      <br />
      <Box>
        <h3>ACME&reg; Box</h3>
      </Box>
    
    </div>
  );
};

export default Index;
