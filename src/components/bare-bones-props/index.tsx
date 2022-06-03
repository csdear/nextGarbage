import { FC } from "react";
import styles from "./bare-bones-props.module.scss";

interface bbProps {
    title: string;
}

const BareBonesProps: FC<bbProps> = ({ title }) => {

return (
    <div className={styles["big-root-class"]}>
    <div className={styles["big-root-class__someSubDiv"]}>
        <h1>barebones {title} &#9760;</h1>
    </div>
    </div>
);
};

export default BareBonesProps;