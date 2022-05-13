import { FC } from "react";
import styles from "./bare-bones.module.scss";

const BareBones: FC = () => {

return (
    <div className={styles["big-root-class"]}>
    <div className={styles["big-root-class__someSubDiv"]}>
        <h1>barebones &#9760;</h1>
        <input
            className={styles["big-root-class__input"]}
            data-testid={"big-root-class__input"}
        />

    </div>
    </div>
);
};

export default BareBones;