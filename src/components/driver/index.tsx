import { FC } from "react";
import styles from "./driver.module.scss";

interface DriverProps {
    data: string;
}

const Driver: FC<DriverProps> = ({ data }) => {

    const Sidecar: FC<{ children: React.ReactNode, label: string }> = ({ children, label }) => {
    return (
        <li>
        <span className={styles["driver__label"]}>
            {label}
        </span>{" "}
        {children}
        </li>
    );
    };

return (
<div className={styles["driver"]} data-testid={"driver"}>
    <hr />
    <div className={styles["driver__content"]}>
    <h1>Driver</h1>
    <ul className={styles["driver__list"]}>
    {!!data && (
        <Sidecar label="License Date:">
        {data}
    </Sidecar>
    )}
    </ul>

    </div>
    <hr />
</div>
);
};

export default Driver;