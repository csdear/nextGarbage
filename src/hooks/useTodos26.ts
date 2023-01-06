    import { useCallback, useEffect } from "react";
    // 26.1: Import global state from react-use
    import { createGlobalState } from "react-use";

    // We removed actionTypes  as no longer needed.

    interface Todo {
    id: number;
    done: boolean;
    text: string;
    }

    //  26.2: use global value then give it your global state.
    // our  case Tod0[]j. see also docs createGlobalState.md
    // We set our type to a list of todos -- Todo[] -- that we are getting
    // from our  interface Todo above.
    const useGlobalTodos = createGlobalState<Todo[]>([]);

    export function useTodos(initialTodos: Todo[]): {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    } {
    /** 26.3 : See prior implementations around this line -- we no longer need the useReducer nor dispatches.
     *  It has been removed here. Here, we instead create a instance of our global state
     *  hook... todos holds the data, and setTodos will update the todo data.
     */
        const [todos, setTodos] = useGlobalTodos();

        /** To handle initialTodos to set it up we use useEffect */
    useEffect(() => {
        setTodos(initialTodos);
    }, [initialTodos, setTodos]);

   /**26.4
    * Update this  addTodo function. It takes param of  'text'.
            it now invokes setTodos, passing in the  existing todos (...todos)
            then setting the new todo, for the id, text (from param) and done.
            Tailend it keeps track  of  data 'todos', and references that state
            updater, setTodos.
    */
    const addTodo = useCallback(
        (text: string) => {
        setTodos([
            ...todos,
            {
            id: todos.length,
            text: text,
            done: false,
            },
        ]);
        },
        [todos, setTodos]
    );

    /** 26.5 Update the removeTodos in the same manner. REmove dispatch from prior iterations.   */
    const removeTodo = useCallback(
        (removeId: number) => {
        setTodos(todos.filter(({ id }) => id !== removeId));
        },
        [todos, setTodos]
    );

    return { todos, addTodo, removeTodo };
    }