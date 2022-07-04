import React, { FC } from "react";
import styles from "./grid-ruler.module.scss";

interface GridRulerProps {
    MacGuffin?: string;
}

const GridRuler: FC<GridRulerProps> = ({ MacGuffin='Sample MacGuffin' }) => {

return (
    <div className={styles["grid-ruler"]}>
    <div className={styles["grid-ruler__someSubDiv"]}>
        <h1>Component - GridRuler - {MacGuffin}</h1>
        <h2>Pizza Size : Jumbo</h2>
    </div>
    </div>
);
};

export default GridRuler;