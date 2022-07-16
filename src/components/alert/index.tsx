import { FC, ReactNode, useState } from "react";
import styles from "./alert.module.scss";
import cn from 'classnames'

interface AlertProps {
    children: ReactNode,
    type: string,
}

const Alert: FC<AlertProps> = ({ children, type }) => {
    
    const classNames = cn({
        [styles["alert__success"]]: type === 'success',
        [styles["alert__error"]]: type === 'error',
    });

    


    return (
        <div className={styles["alert"]}>
            <div className={styles["alert__container"]}>
                <div className={classNames}>
                    {children}
                </div>
                
                    
                
                
                 
            </div>

        </div>
    );
};

export default Alert;