import { FC } from "react";
import styles from "./jumbotron.module.scss";

const Jumbotron: FC = () => {

return (
    <div className={styles["jumbotron"]}>
    <div className={styles["jumbotron__container"]}>
    <div className={styles["jumbotron__image"]}><img src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1000&h=500&dpr=1"></img></div>
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