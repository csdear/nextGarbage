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
                <h6>{title}</h6>
            </div>
            <div className={styles["collapso__content"]} data-testid={"collapso-content"}>
                <button type="button" className="btn" onClick={handleFilterOpening}>
                    {!isOpen ? (
                    // <FontAwesomeIcon icon={faChevronDown} />
                    <FontAwesomeIcon style={{ width: '10px', height: '10px'}} icon="chevron-down" />
                    ) : (
                        <FontAwesomeIcon style={{ width: '10px', height: '10px'}} icon="chevron-up" />
                    )}

                </button>
            </div>

        </div>

    </div>
);
};

export default Collapso;

