import { useEffect, useReducer, useRef } from 'react';
import { FC, ReactElement, ReactNode, useCallback, useState } from 'react';
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

  interface Todo {
    id: number;
    done: boolean;
    text: string;
  }

  const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    label?: string;
  }
> = ({ label, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: "green",
      color: "white",
      fontSize: "xx-large",
    }}
  >
    {label ?? children}
  </button>
);

  type ActionType =
    | { type: "ADD"; text: string }
    | { type: "REMOVE"; id: number };

  /*
    22.4. Very verbose prior, so lets use a utility ReturnType.
    create a custom hook.
    the  worlds simplist custom hook here -- useNumber
    that returns a useState with a number. we could just init
    as 0, but  intead lets make fancy and take in the initial value

  */
  const useNumber = (initialValue: number) => useState<number>(initialValue);
  /* 22.5 : NExt create a type for useNumbervalue. We're making two types, one
  for the value and one for the set value.
  It gets angry  though "useNumber' refers to a value, but is being used as a type here. Did you mean 'typeof useNumber'?ts(2749)"
  We want not the value of useNumber which would be the function itself, but the TYPE of the function.
  We resolve by adding 'typeof'
  CMD-K,CMD I on 'useNumberValue', revealed that we get an array back with the first item is of type number and  that second is that tricky
  react Dispatch type we used prior in 22.2   :
      type useNumberValue = [number, Dispatch<SetStateAction<number>>]
  So we replace value: number with our type useNumber..


  */
 type UseNumberValue = ReturnType<typeof useNumber>[0];
  /*
  22.7 then create another type for the set value
  */
  type UseNumberSetValue = ReturnType<typeof useNumber>[1];

  /*22.2 Create a IncrementerComponent
   setValue is the interesting part. For a setter. setValue can be a number, or a function that returns a number.
   if we go to setValue in the piece of state we created.  we see that setValue is a type of "Reac.Dispatch<Reac.SetStateAction<number>>"
   so we can use that long type to set the type for setValue.
   We add a onClick handler that innvokes setValue setter with the value + 1


   */
  const Incrementer: FC<{
    //...22.6 replace with type we created UseNumberValue
    // value: number;
    value: UseNumberValue;
    //...22.8
    // setValue: React.Dispatch<React.SetStateAction<number>>; Should have working code at this point.
    setValue: UseNumberSetValue;
  }> = ({ value, setValue }) => (
    // v1 native version of button
    // <button onClick={() => setValue(value + 1)}>Add - {value}</button>
    // v2 use of custom Button component, but with children
    // <Button onClick={() => setValue(value + 1)}>Add - {value}</Button>
    // v3 +SUPERIOR+ using custom prop 'label' instead of consuming children
    <Button onClick={() => setValue(value + 1)} label={`Add - ${value}`} />
  )

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

    const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
        switch(action.type) {
        case "ADD":
          return [
            ...state,
            {
              id: state.length,
              text: action.text,
              done: false,
            },
          ];
        case "REMOVE":
          return state.filter(({ id }) => id !== action.id);
        default:
          throw new Error();
      }
    },[]);

    const newTodoRef = useRef<HTMLInputElement>(null);

    const onAddTodo = useCallback(() => {
      if (newTodoRef.current) {
        dispatch({
          type: "ADD",
          text: newTodoRef.current.value,
        });
        newTodoRef.current.value = '';
      }
    }, []);

    //22.1 Create an new piece of state of type number
    //22.9 Change this to useNumber instead of useState. End, a custom hook with all the typing around  it.
    const [value, setValue] = useNumber(0);

    return (
     <div className={styles["ts-react__body"]}>
         <h1>TS + React</h1>
            <hr />
            <Heading title="Introduction" />
            <Box title="A box">child</Box>
            <List items={["one", "two","three"]} onClick={onListClick} />
            {/* Lets put the response in one of our spiffy boxes */}
            <Box title="API Response to State">{JSON.stringify(payload)}</Box>
            {/*22.3 Add the Incrementer component here, passing two props, value and setValue */}
            <Incrementer value={value} setValue={setValue} />
            <Heading title="Todos" />
            {todos.map((todo) => (
              <div key={todo.id}>
                {todo.text}
              <button onClick={() => dispatch({
                type: "REMOVE",
                id: todo.id,
              })
            }
            >Remove
            </button>
            </div>
            ))}
            <div>
              <input type="text" ref={newTodoRef} />
              {/* this Button component variant uses default children for instance */}
              <Button onClick={onAddTodo}>Add Todo</Button>
            </div>
     </div>
  );
};

export default TSReact;
