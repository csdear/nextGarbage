import cn from "classnames";
import type { FC } from "react";
// Import constant 'NextGarbage_ERROR_TYPE, with two members for Red and Blue...
import { NEXTGARBAGE_ERROR_TYPE } from "src/constants/constants";
import styles from "./nextgarbage-error.module.scss"

/**
 * type ErrorConfigType = { ... }: defines a type called ErrorConfigType that maps each key of the NEXTGARBAGE_ERROR_TYPE enum
 * to an object with three properties: headerTitle, descriptionMessage, and variant.
 */
type ErrorConfigType = {
    [key in keyof typeof NEXTGARBAGE_ERROR_TYPE]: {
    headerTitle?: string;
    descriptionMessage: string;
    variant: "error" | "warning";
    };
};

/**
 * const errorConfigMap: ErrorConfigType = { ... }: creates a constant errorConfigMap of type ErrorConfigType
 *  that maps each value of the NEXTGARBAGE_ERROR_TYPE enum to an object with headerTitle, descriptionMessage,
 * and variant properties. These objects provide the specific error message and variant to be displayed based on the type prop.
 */
const errorConfigMap: ErrorConfigType = {
    [NEXTGARBAGE_ERROR_TYPE.RED_ERROR]: {
        headerTitle: "There was a problem retrieving the RED data",
        descriptionMessage: "Please refresh the page or contact <a>RED Support</a> if the problem persists",
        variant: "error",
    },
    [NEXTGARBAGE_ERROR_TYPE.BLUE_ERROR]: {
        headerTitle: "There was a problem retrieving the BLUE data",
        descriptionMessage: "Please refresh the page or contact <a>BLUE Support</a> if the problem persists",
        variant: "error",
    },
};

interface NextGarbageErrorProps {
    type: NEXTGARBAGE_ERROR_TYPE;
    className?: string;
}

const NextGarbageError: FC<NextGarbageErrorProps> = ({ type, className }) => {
    const { headerTitle, descriptionMessage, variant } = errorConfigMap[type]; //IMPORTANT
    return (
        <div
        role="alert"
        aria-live="assertive"
        className={cn(styles["nextgarbage-error"], className)}
        >
        <div className={styles["newsstand-error__notification"]}>
        <h1>ATTN:
            { headerTitle }
        </h1>
        <ul>
            <li>Desc: { descriptionMessage }</li>
            <li>Variant: { variant }</li>
        </ul>


        </div>

        </div>
    );
    };

export default NextGarbageError;
