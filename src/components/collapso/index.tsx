import React, { FC, useState, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown
} from "@fortawesome/fontawesome-free-solid";
    // } from "@fortawesome/free-solid-svg-icons"; // Try alternative library.

import styles from "./collapso.module.scss";

interface CollapsoProps {
    open?: boolean;
    title: string;
    children: ReactNode;
}


const Collapso: FC<CollapsoProps> = ({ open, title, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

return (
    <div className={styles["collapso"]} data-testid={"collapso"}>
        <div className={styles["collapso__container"]}>
            <div className={styles["collapso__header"]} data-testid={"collapso-header"}>
                <h6 className={styles["collapso__header--title"]}>{title}</h6>
                <button type="button" className={styles["collapso__header--button"]} onClick={handleFilterOpening}>
                    {!isOpen ? (
                        // <FontAwesomeIcon icon={faChevronDown} />
                        <FontAwesomeIcon style={{ width: '10px', height: '10px'}} icon="chevron-down" />
                    ) : (
                        <FontAwesomeIcon style={{ width: '10px', height: '10px'}} icon="chevron-up" />
                    )}
                </button>
            </div>
            <div className={styles["collapso__content"]} data-testid={"collapso-content"}>
                <div>{isOpen && <div className={styles["collapso__content--children"]}>{children}</div>}</div>
            </div>

        </div>
    </div>
);
};

export default Collapso;

