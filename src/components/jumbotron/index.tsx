import { FC } from "react";
import styles from "./jumbotron.module.scss";

const Jumbotron: FC = () => {

return (
    <div className={styles["jumbotron"]}>
    <div className={styles["jumbotron__container"]}>

        <div className={styles["jumbotron__copy"]}>
            <h1>Flipster Digital Magazines</h1>
                <p>Providing readers with access to best-selling  digital magazines from  top publishers including</p>
                <p>National Geographic, Conde Nast, Meredith, Bloomberg L.P. and more.</p>
        </div>
    </div>
    </div>
);
};

export default Jumbotron;