import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQueryState } from "next-usequerystate";
import type { FC } from "react";
import styles from "./back-to.module.scss";
/**
 * dataAuto as props, dataauto props
 */
interface BackToProps {
    className?: string;
    dataAuto?: string;
}

const BackTo: FC<BackToProps> = ({ className }) => {

    // const linkText = formatMessage(sharedMessages.back);
    const linkText = "Back";

    const [backTo] = useQueryState("backTo", {
        defaultValue: "",
    });

    if (!backTo) {
        return null;
    }
    return (
        <div className={`${styles["back-to"]} ${className}`}>
        <a
            href={backTo}
            aria-label={linkText}
            className={styles["back-to__link"]}
        >
            <FontAwesomeIcon
            className={styles["back-to__icon"]}
            icon="arrow-left"
            />
            <span className={styles["back-to__message"]}>{linkText}</span>
        </a>
        </div>
    );
    };

export default BackTo;
