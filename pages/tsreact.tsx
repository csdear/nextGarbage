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
    //22.3 Solved : open up useState generic, passing in the payload interface type, add a OR '|' operator for null
    //this will make ts happy about what is going to go in this payload.
    // 22.4 Create the payload. Go to /public,
    const [payload, setPayload] = useState<Payload | null>(null);

    return (
     <div className={styles["ts-react__body"]}>
         <h1>TS + React</h1>
            <hr />
            <Heading title="Introduction" />
            <Box title="A box">child</Box>
            <List items={["one", "two","three"]} onClick={onListClick} />
     </div>
  );
};

export default TSReact;
