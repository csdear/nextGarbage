// the useTodos handles all the LOGIC for todo, adding, removing etc.
// for this state machine
// import { useCallback, useReducer } from "react";

// Update #24.1 useContext bring in createContext and useContext
import { FC, useCallback, useReducer, createContext, useContext } from "react";

/* #24.4 Define output of useTodosManager as a new type, "UseTodosManagerResult"
This type is just the ReturnType of  useTodosManager.
It is a  function... not a  type.. see error "'useTodosManager' refers to a value, but is being used as a type here. Did you mean 'typeof useTodosManager'?"
so we must use typeof.
Then on UseTodosManagerResult, CMD+K,I we see
we have properly hinted that we now have access to shared todos, addTodo and removeTodo, which we desired prior in #24.3
    type UseTodosManagerResult = {
        todos: Todo[];
        addTodo: (text: string) => void;
        removeTodo: (id: number) => void;
    }

*/

type UseTodosManagerResult = ReturnType<typeof useTodosManager>;

// #24.2 define our context...
/* #24.5 We returnn now that we have  a UseTodosManagerResult type, open up a  generic and paste in
   createContext takes a default value, we need a data object, some basic intial value that  conforms.
   Not used, just to satisfy createContext
*/
const TodoContext = createContext<UseTodosManagerResult>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
})

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

interface Todo {
  id: number;
  done: boolean;
  text: string;
}
/* #24.3. Share the output of useTodos, Rename to useTodosManager
because we are gonna export some other custom hooks (...) that give  us access to the
shared todos, addTodo and removeTodo.
We also no longer need to export it */
////export function useTodos(initialTodos: Todo[]): {
function useTodosManager(initialTodos: Todo[]): {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
} {
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
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
  }, initialTodos);

  const addTodo = useCallback((text: string) => {
    dispatch({
      type: "ADD",
      text,
    });
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  }, []);

  return { todos, addTodo, removeTodo };

}

/**#24.6 Provider.  */
export const TodosProvider: FC<{ initialTodos: Todo[], children: React.ReactNode }> = ( {initialTodos, children}) =>
(
  <TodoContext.Provider value={useTodosManager(initialTodos)}>{children}</TodoContext.Provider>
);


/** 24.9 ...back at useTodos, Create a new "useTodos" here at the bottom. This is we combine *Context* with *Custom Hooks*
 * Will return the todos. First we will need to get the context -- 'ctx'
 * with useContext and give it the TodoContext.
*/
export const useTodos = (): Todo[] => {
  // const ctx = useContext(TodoContext)
    const { todos } = useContext(TodoContext);
    return todos;
}

/* 24.10 we do the same for  add todo and remove todo.
error on return addTodo and return removeTodo -- Type '(text: string) => void' is not assignable to type 'Todo[]'.
Solution is to replace with USeTodosManagerResult type like so:
*/
// type error : export const useAddTodo = (): Todo[] => {
  export const useAddTodo = (): UseTodosManagerResult["addTodo"] => {
  // const ctx = useContext(TodoContext)
    const { addTodo } = useContext(TodoContext);
    return addTodo;
}

export const useRemoveTodo = (): UseTodosManagerResult["removeTodo"] => {
  // const ctx = useContext(TodoContext)
    const { removeTodo } = useContext(TodoContext);
    return removeTodo;
}