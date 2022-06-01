import { FC } from "react";
import styles from "./bar.module.scss";

const Bar: FC = () => {

return (
    // <div className={styles["big-root-class"]}>
    <section className={styles["bar"]}>
    <img className={styles["bar__logo"]} src="https://place-hold.it/200x200"></img>
        <ul className={styles["bar__list"]}>
            <li className={styles["bar__item"]}>
                <a href="#" className={styles["link link--highlight"]}>Item Lorem Ipsum Lorem Ipsum 1</a>
            </li>
            <li className={styles["bar__item"]}>
                <a href="#" className={styles["link"]}>Item Lorem Ipsum Lorem Ipsum 2</a>
            </li>
            <li className={styles["bar__item"]}>
                <a href="#" className={styles["link"]}>Item Lorem Ipsum Lorem Ipsum 3</a>
            </li>
        </ul>
    </section>
);
};

export default Bar;