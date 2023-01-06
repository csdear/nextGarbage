    import React, { FC, useCallback, useRef } from "react";
    import { useTodos } from "../src/hooks/useTodos26";
    // import "./App.css";

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

    const initialTodos = [{ id: 0, text: "Hey there", done: false }];

    function App() {
    /** 26.6 prior we set our initial todos directly here. this time we
     * hoist initialTodos higher than App, and feed it to useTodos.
     */
    const { todos, addTodo, removeTodo } = useTodos(initialTodos);

    const newTodoRef = useRef<HTMLInputElement>(null);

    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
        addTodo(newTodoRef.current.value);
        newTodoRef.current.value = "";
        }
    }, [addTodo]);

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
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
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
    const { todos } = useTodos(initialTodos);
    return (
        <UL
        items={todos}
        itemClick={() => {}}
        render={(todo) => <>{todo.text}</>}
        />
    );
    };

    const AppWrapper = () => (
    <div
        style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        }}
    >
        <App />
        <JustTheTodos />
    </div>
    );

    export default AppWrapper;