// Has a better focus on the UI alone now... useTodos is handling
// the todo logic.  the ref for the todo and the render.
// can easily unit test this too.


import React, { FC, ReactNode, useCallback, useRef } from "react";

// for 'pages' I source styles from a global home.module.scss
import { useTodos } from "../src/hooks/useTodos";
// STYLE is defined in home.module.scss
import styles from '../src/components/home/home.module.scss'
import UL from '../src/components/generics/ul';


const Heading = (props: { title: string }) => <h2>{props.title}</h2>

// TS ERROR
// Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'
// Property 'children' does not exist on type '{}'.

// const Box: React.FunctionComponent = ({ children }) => (  // THIS SIGNATURE CAUSED THE ERROR
// SOLUTION
// 1. use  signature format :  const Box: React.FC<BoxProps> = ({ children }) => (
// 2. Add an interface for BoxProps
// 3. Add an import for ReactNode at the top :  import React, { FC, ReactNode, useCallback, useRef } from "react";
  interface BoxProps {
    children?: ReactNode;
  };

const Box: React.FC<BoxProps> = ({ children }) => (
      <div
          style={{
            padding: "1rem",
            fontWeight: "bold",
          }}
        >
          {children}
        </div>
      );

const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: "red",
      color: "white",
      fontSize: "xx-large",
    }}
  >
    {title ?? children}
  </button>
);


const TSReactCustomHook = () => {
  // Implementation here of custom hook useTodos
  // We can pass in baked in todo from data like below
  // Implemented as a destructure. Notice we have access
  // to todos, object and the two void functions
  // addTodo and removeTodo.
  // addToDo fires a useCallback update on addTodo change
  // as it is monitoring that dep, and will reexecute the
  // custom hook code.  removeTodo is use directly
  // on the button onClick, removing by todo id
  // addTodo is also wired to a button onclick ---
  // when
  const { todos, addTodo, removeTodo } = useTodos([
    { id: 0, text: "Hey there im a baked in todo", done: false },
  ]);

  const newTodoRef = useRef<HTMLInputElement>(null);

  // function adds a todo list.
  // anytime [addToDo] changes we get a new callback to
  // the useTodos hook
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = "";
    }
  }, [addTodo]);

  return (
    <div>
      <Heading title="Introduction" />

      <Box>Hello there</Box>

      <Heading title="Todos" />
      {/* This is where the generic componet will be implemented, replacing this todos.map   */}
      
      <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </>
        )}
      />
      {/* {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))} */}

      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

export default TSReactCustomHook;