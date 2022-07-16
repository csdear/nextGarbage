import { FC, ReactNode, useState } from "react";
import styles from "./alert.module.scss";
import cn from 'classnames'

interface AlertProps {
    children: ReactNode,
    type: string,
}

const Alert: FC<AlertProps> = ({ children, type }) => {
    const [isActive, setActive] = useState(false);
    const classNames = cn({
        [styles["alert__success"]]: type === 'success',
        [styles["alert__error"]]: type === 'error',
    });

    const buttonClasses = cn({
            "btn": true,
            "btn__active": isActive,
            [styles.btn__active]: isActive,
    })


    return (
        <div className={styles["alert"]}>
            <div className={styles["alert__container"]}>
                <div className={classNames}>
                    {children}
                </div>
                {isActive && (
                    <button className={buttonClasses} onClick={() => setActive(!isActive)}>Pretend Submit</button>
                )}
                
                 
            </div>

        </div>
    );
};

export default Alert;