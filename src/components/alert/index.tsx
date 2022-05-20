import { FC } from "react";
import styles from "./alert.module.scss";

const Alert: FC = () => {

return (
    <div className={styles["alert"]}>
    <div className={styles["alert__container"]}>
        <h1>Alert!</h1>
        <p>You haven't entered nuthin!</p>
        <p>Try again in text field below</p>
    </div>

    </div>
);
};

export default Alert;