    import React, { FC, useCallback, useRef } from "react";
    // bye bye useTodos custom hook
    // import { useTodos } from "../src/hooks/useTodos26";
    // import "./App.css";

    import { Provider, useSelector, useDispatch } from 'react-redux';
    import store, { selectTodos, addTodo, removeTodo } from "../src/store/store";

    const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;


    // Had to correct children here to inherit from  type react reactNode.
    const Box: FC<{ children: React.ReactNode}> = ({ children }) => (
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

    function UL<T>({
    items,
    render,
    itemClick,
    }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
    > & {
    items: T[];
    render: (item: T) => React.ReactNode;
    itemClick: (item: T) => void;
    }) {
    return (
        <ul>
        {items.map((item, index) => (
            <li onClick={() => itemClick(item)} key={index}>
            {render(item)}
            </li>
        ))}
        </ul>
    );
    }


    function App() {

    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();


    const newTodoRef = useRef<HTMLInputElement>(null);

    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
        dispatch(addTodo(newTodoRef.current.value));
        newTodoRef.current.value = "";
    }
    }, [dispatch]);

    return (
        <div style={{ color: 'blue', fontSize: 'xx-large', margin: 'auto', maxWidth: '800px'}}>
        <Heading title="Introduction" />
        <Box>Hello there</Box>

        <Heading title="Todos" />
        <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
            <>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
            </button>
            </>
        )}
        />
        <div>
            <input type="text" ref={newTodoRef} />
            <Button onClick={onAddTodo}>Add Todo</Button>
        </div>
        </div>
    );
    }

    const JustTheTodos = () => {
        const todos = useSelector(selectTodos);
        return (
        <UL
        items={todos}
        itemClick={() => {}}
        render={(todo) => <>{todo.text}</>}
        />
    );
    };

    const AppWrapper = () => (
    <Provider store={store}>
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
        }}
        >
        <App />
        <JustTheTodos />
        </div>
    </Provider>
    );

    export default AppWrapper;