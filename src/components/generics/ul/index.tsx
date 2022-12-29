// import { FC } from "react";
import styles from "./ul.module.scss";

// Not about to use FC with Generics...

interface ULProps<T> {
    items: T[];
    render: (item: T) => React.ReactNode;
    itemClick: (item: T) => void;
}



const UL = <T extends unknown> ({
    items,
    render,
    itemClick
 }: ULProps<T>) => {
    return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
    );
};

export default UL;