import { useEffect } from 'react';
import { FC, ReactNode, useCallback, useState } from 'react';
// for 'pages' I source styles from a global home.module.scss
import styles from '../src/components/home/home.module.scss'

const Heading = (props: { title: string }) => <h2>{props.title}</h2>
interface BoxProps {
    title: string,
    children?: ReactNode;
  };

  const Box: React.FC<BoxProps> = ({
    title,
    children,
  }) => (
    <div style={{
        border: "1px dashed grey",
        color: 'blue',
        padding: "1rem",
        fontWeight: "bold"}}>
      {/* the boxcar children */}
      <h3>{title}</h3>
      {children}
    </div>
  );

  // The List and added event handler onClicks for each item.
  // alerts out each click
  const List: FC<{
      items: string[],
      onClick?: (item: string) => void
    }> = ( {items, onClick} ) => (
      <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => onClick?.(item)}>{item}</li>
          ))}
      </ul>
  )

  //21.2 define payload type as an interface
  interface Payload {
      text: string;
  }

const TSReact = () => {
    const onListClick = useCallback((item: string) => {
        alert(item)
    }, [])

    //21.1 use case : downloading an api payload and putting into state
    // normally you just init state at null -- but what if we wanted to
    // define the incoming payload's TYPE as well?
    //21.3 Solved : open up useState generic, passing in the payload interface type, add a OR '|' operator for null
    //this will make ts happy about what is going to go in this payload.
    // 21.4 Create the payload. Go do this in /public,. I had to make one.
    const [payload, setPayload] = useState<Payload | null>(null);

    // 21.5. Create a useEffect hook.
    useEffect(() => {

      fetch("/data.json") // fetch the data... interesting note, dont append with public, it will fail.
        .then(resp => resp.json() // gonna get some json from that response
        .then(data => {  // call the useState setter setPayload to update the state.
          setPayload(data);
        }))
    },[]) // empty dependency array means it will run once on render.

    return (
     <div className={styles["ts-react__body"]}>
         <h1>TS + React</h1>
            <hr />
            <Heading title="Introduction" />
            <Box title="A box">child</Box>
            <List items={["one", "two","three"]} onClick={onListClick} />
            {/* Lets put the response in one of our spiffy boxes */}
            <Box title="API Response to State">{JSON.stringify(payload)}</Box>
     </div>
  );
};

export default TSReact;
