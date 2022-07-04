import React, { FC } from "react";
import styles from "./box.module.scss";

interface BoxProps {
    MacGuffin?: string;
}

const Box: FC<BoxProps> = ({ MacGuffin='Sample MacGuffin' }) => {

return (
    <div className={styles["box"]}>
    <div className={styles["box__someSubDiv"]}>
        <h1>Component - Box - {MacGuffin}</h1>
        <h2>Pizza Size : Jumbo</h2>
    </div>
    </div>
);
};

export default Box;