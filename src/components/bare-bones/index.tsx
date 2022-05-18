import { FC } from "react";
import styles from "./bare-bones.module.scss";
import Layout from "../layout-component";

const BareBones: FC = () => {

return (
    <div className={styles["big-root-class"]}>
    <div className={styles["big-root-class__someSubDiv"]}>
        <h1>barebones &#9760;</h1>
        <input
            className={styles["big-root-class__input"]}
            data-testid={"big-root-class__input"}
        />
        <Layout condition/>

    </div>
    </div>
);
};

export default BareBones;