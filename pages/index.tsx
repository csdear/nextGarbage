import { FC, useState, useEffect } from 'react';
import { InferGetStaticPropsType, GetStaticProps } from "next";
import Link from 'next/link';
import Hello from '../src/components/hello';
import {motion} from 'framer-motion';
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
import GridRuler from '../src/components/grid-ruler';
import Grid from '../src/components/grid';
import SomeText from '../src/components/some-text';
import Date from '../src/components/date'
import ImageSlider from '../src/components/image-slider';
// import ImageCarouselLayout from '../src/components/image-carousel-layout';
import { relative } from 'path';
import cn from 'classnames'
import styles from '../src/components/home/home.module.scss'
import GridCards from '../src/components/grid-cards';
import Jumbotron from '../src/components/jumbotron';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationLink from "../src/components/navigation-link";
import AdBanner from 'src/components/mobile-ad-banner';
import Cornerstone from 'src/components/cornerstone';
import MobileAdBanner from 'src/components/mobile-ad-banner';

type Data = {
  message: string;
  result: {
    id: string;
    films: string;
    people: string;
    planets: string;
    species: string;
    vehicles: string;
  };
};


export const getStaticProps: GetStaticProps<{ swapis: Data }> = async () => {
  const res = await fetch("https://www.swapi.tech/api/");
  const swapis: Data = await res.json();

  return {
    props: {
      swapis
    },
  };
};


const Index: FC = ({
  swapis
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [userInput, setUserInput] = useState<string>('');
  // const [isError, setIsError] = useState<boolean>(true); // hell, showError is enough for this simple demo.
  const [showError, setShowError] = useState<boolean>(true);

  console.log('swapit', swapis);

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

  const [isActive, setActive] = useState(false);

  const buttonClasses = cn({
    "btn": true,
    "btn__active": isActive,
    [styles.btn__active]: isActive,
})

const API_URL = 'https://api.example.com/';

  return (
    <div>
      <motion.h1 whileHover={{ scale: 0.8 }}>Garbage.</motion.h1>
      <motion.div
                style={{
                    width: 20,
                    height: 20,
                    //  borderRadius: 30,
                    // backgroundColor: "black",
                    position: "relative",
                    left: "10rem"

                }}
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}>
            &#128540;</motion.div>
      <Link href="/grid-forged">
        <a>Grid Forged</a>
      </Link>
       |-------|
      <Link href="/people">
        <a>people</a>
      </Link>
      |-------|
      <Link href="/tsreact">
        <a>ts+react</a>
      </Link>
      |-------|
      <Hello />
      <h2>More internal garbage LINKS</h2>
      <Link href="/tsreactGenericComponent">
        <s><a>ts+react Generic Component (UL)</a></s>
      </Link><br />
      <Link href="/tsreactCustomHook">
        <s><a>ts+react Custom Hook</a></s>
      </Link><br />
      <Link href="/tsreactUseContext">
        <a>ts+react useContext</a>
      </Link><br />
      <h2>List of Films</h2>
      {Object.entries(swapis?.result || {}).map(([key, value]) => (
        <ul key={key}>
          <li>{value}</li>
        </ul>
      ))}
      <RenderCounter />
      <Search />
      <BareBones />
      {showError && <Alert type='error'>
        <h1>Alert!</h1>
        <p>You haven't entered nuthin!</p>
        <p>Try again in text field below</p>
        </Alert>}

        {!showError &&
        <>
        <Alert type='success'>
        <h1>Success!</h1>
        </Alert>
        <button className={buttonClasses}  onClick={() => setActive(!isActive)}>Pretend Submit</button>
        </>
        }



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
      {/*
      load-them-datas component to demonstrate Axios-Hooks.
      A super effective way to make api calls.  Here we pass
      a userName as a query string parameter, and json data
      re: the user's github account is returned.
      userName csdear */}
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
          <h3>Standalone ACME&reg; Box</h3>
        </Box>

      [...]
      {/* GRID starts here with the folloing div container  */}
      <div className="container" style={{ margin: "16px", position: "relative", height: "100vh", background: "lightGrey" }}>

      <GridRuler spacing="sm"></GridRuler> {/* spacing: sm, md or lg */}
        <Box>
          <h3>ACME&reg; Box</h3>
        </Box>
        <br/>

        <Grid
        container // container: remove for full width, vertical stack of pancakes
        spacing="sm"  // spacing: xs, sm, md, or lg.
        alignItems="flex-start" // alignItems : "flex-start" | "center" | "flex-end"; Alignment of grid items Top, Middle or Bottom.
        justifyContent="flex-start" // justifyContent : "flex-start" | "center" | "flex-end" | "space-between";
        style={{ height: "75%", background: "lightBlue" }} // Note I have made as a default height of 75% and background color lightBlue so you can see the bounds of the Grid.
      >
        {/*Grid item xs, sm, md and lg controls how much horizontal width THIS grid item and box combination will take up, out of a  maximum of 12 columns.
          the number is how many columns to take up. Subsequent Grid  items will wrap to the next line if they  run out of room.
          'lg' is the most common, but resize the viewport to see how the grid itrem re-draws itself in xs, sm, md dimensions.
          lg={3} : 3/12 columns
          lg={6} : 6/12 columns. Grid item takes up half the screen.
          lg={12} : 12/12, full width.
        */}
        <Grid item xs={1} sm={6} md={4} lg={3} style={{ background: "pink" }}>
          <Box>Box1</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3} style={{ background: "Blue" }}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3} style={{ background: "coral" }}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3} style={{ background: "orange" }}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
      </div>

      <SomeText superSized textAlign='center'>
      <p>
          Integer elementum massa at nulla placerat varius.
          Suspendisse in libero risus, in interdum massa.
          Vestibulum ac leo vitae metus faucibus gravida ac in neque.
          Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
      </p>
      </SomeText>
      <SomeText textAlign='right'>
      <p>
          -- Integer elementum massa at nulla placerat varius.
          Suspendisse in libero risus, in interdum massa.
          Vestibulum ac leo vitae metus faucibus gravida ac in neque.
          Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
      </p>
      </SomeText>
      <Date dateString='2020-01-02'></Date>
      <ImageSlider />
      <GridCards />
      <hr />
      <Jumbotron />
      <hr />
      <Box style={{ width: '300px', color: 'blue', border: '3px solid black', marginLeft: '500px' }}>
          <h3>Style-Injecto ACME&reg; Box</h3>
        </Box>
      <hr />
      <h2>Font Awesome</h2>

          <FontAwesomeIcon style={{ width: '25px', height: '25px'}} icon="book" />

        <br />
        <br />
          {/* <NavigationLink
            title={'Go To Your Settings'}
            href={"/"}
            icon={"cog"}
          /> */}

        <br />
        <br />
        <MobileAdBanner />
        <Cornerstone />

        <h2>Pretend Im a phone</h2>
        {/*
        https://freshman.tech/flexbox-mobile-app/
        https://jsfiddle.net/ayoisaiah/bow0cpxt/6/
        See the style in home.module.scss
        flexbox implemnetation  for a header,
        I like how the header and two icons align.
        */}
        <div className={styles["home-svg"]}>
        <header className={styles["home-svg__header"]}>



          <svg id="icon-user" viewBox="0 0 32 32">
            <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
          </svg>
          <h2>Some svgs</h2>
          {/* Note attributes for height and width  are allowed.
          eg <svg width="25" height="25"><path></path></svg> */}

          <svg fill="#333" id="icon-cog" viewBox="0 0 32 32">
          <path d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z"></path>
          </svg>
        </header>
        </div>
    <hr></hr>
    <div><h1>URLcat</h1>
    {API_URL}


    </div>
    {/*  the end */}
    </div>
  );
};

export default Index;
