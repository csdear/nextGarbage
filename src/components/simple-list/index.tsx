import React, { FC } from "react";
import styles from "./simple-list.module.scss";

interface SimpleListProps {
    list: Array[string];
}

const SimpleList: FC<SimpleListProps> = ({ list }) => {

return (
    <div className={styles["simple-list"]}>
        <div className={styles["simple-list__someSubDiv"]}>
            <ul>
                {list.map((item) => {
                return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    </div>
);
};

export default SimpleList;