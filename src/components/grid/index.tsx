import React, { FC } from "react";
import styles from "./grid.module.scss";

interface GridProps {
    MacGuffin?: string;
}

const Grid: FC<GridProps> = ({ MacGuffin='Sample MacGuffin' }) => {

return (
    <div className={styles["grid"]}>
    <div className={styles["grid__someSubDiv"]}>
        <h1>Component - Grid - {MacGuffin}</h1>
        <h2>Pizza Size : Jumbo</h2>
    </div>
    </div>
);
};

export default Grid;