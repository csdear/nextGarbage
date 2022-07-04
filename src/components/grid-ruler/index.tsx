import React, { FC } from "react";
import styles from "./grid-ruler.module.scss";
import cn from "classnames";
// A simple JavaScript utility for conditionally joining classNames together.

interface GridRulerProps {
    spacing?: "sm" | "md" | "lg"; // ts union
}

const GridRuler: FC<GridRulerProps> = ({ spacing }) => {
    const classNames = cn(styles["grid-ruler"], {
        [styles[`GridRuler_spacing_${spacing}`]]: spacing,
    });

return (
    <div className={classNames}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div className={styles["GridRuler_item"]} key={number} />
      ))}
    </div>
);
};

export default GridRuler;