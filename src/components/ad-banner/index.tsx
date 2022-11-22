// import { FC } from "react";
// TODO
import styles from "./ad-banner.module.scss";

const AdBanner = () => {

return (
    <div className={styles["adbanner"]}>
        <hr />
        <div className={styles["adbanner__container"]}>
            <div className={styles["adbanner__image"]} />
                <div className={styles["adbanner__copy"]}>
                    <h1>Adbanner</h1>
                        <p>Excerpt</p>
                        <p>Excerpt</p>
                </div>
        </div>
        <hr />
    </div>
);
};

export default AdBanner;