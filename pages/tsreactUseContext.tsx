// Has a better focus on the UI alone now... useTodos is handling
// the todo logic.  the ref for the todo and the render.
// can easily unit test this too.

// 24.8 : bring in useContext. We want to get data (todos, addTodo, removeTodo) from the context. Back to useTodos.tsx after this...
import React, { FC, ReactNode, useCallback, useRef, useContext } from "react";

// for 'pages' I source styles from a global home.module.scss
// 24.7i : Bring in the provider...
//// import { useTodos, TodosProvider } from "../src/hooks/useTodos";
// 24.11 : Back to 'page' we update our custom hooks import - bringin in useAddTodo, useRemoveTodo
import { useTodos, useAddTodo, useRemoveTodo, TodosProvider } from "../src/hooks/useTodos";

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


const TSReactUseContext = () => {
  /** 24.12 : Now use those new functions provided  */
  const todos = useTodos();
  const addTodo = useAddTodo();
  const removeTodo = useRemoveTodo();

  /** 24.13 TEST IT! here localhost:3000/tsreactUseContext
   * Notice that when you add/remove a todo to 1, the other
   * todo list is updated as wll! Meaning we are sharing
   * STATE now.
   */

  // Deprecated by 24.12^
  // const { todos, addTodo, removeTodo } = useTodos([
  //   { id: 0, text: "A generic component todo", done: false },
  // ]);

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

      <Box>TS React useContext</Box>

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
      <div>
        <input type="text" ref={newTodoRef} />
        {/* Example demo using inline style aggregation and a title nullish.... <Button style={{ border: '3px dashed blue'}} title='BLAH' onClick={onAddTodo}>Add Todo</Button> */}
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

// 2 Column Grid - two column grid, doubled component for state testing
/* 24.7ii : Wrap it all up in the  TodosProvider... and  provide initial todos (we can  get from prior ^ [
    { id: 0, text: "A generic component todo", done: false },
  ])
*/

/**24.14 : Refinement. function just show todos...
 * Reuse that <UL> gen component
 * Removing the remove  button from  instance
 * Make itemClick simpler.
  */

const JustShowTodos = () => {
  const todos = useTodos();
  return (
    <UL
        items={todos}
        // itemClick={(item) => alert(item.id)}
        itemClick={() => {}}
        render={(todo) => <>{todo.text}</>
          // (
          // <>
          //   {todo.text}
          //   <button onClick={() => removeTodo(todo.id)}>Remove</button>
          // </>
          // )
      }
      />
  )
}
/** 24.15 : Then we can replace the second app with JustShowTodos
 *  Demonstrates we can have two  separate components that observe
 * the same state data source.
 */
const AppWrapper = () => (
    <TodosProvider initialTodos={[
      { id: 0, text: "A useContext todo", done: false },
    ]}>
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      <TSReactUseContext></TSReactUseContext>
      <JustShowTodos />
      {/* <TSReactUseContext></TSReactUseContext> */}
    </div>
    </TodosProvider>
);

//  Then export AppWrapper as the default
// wrapper pattern in a  sense.. before the
// export you can create an "wrapper", compile
// everything together, then export the wrapper
// instead of the component.
// export default TSReactUseContext;
export default AppWrapper;


