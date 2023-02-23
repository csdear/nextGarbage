import type { FC } from "react";
import { NEXTGARBAGE_ERROR_TYPE } from "src/constants/constants";
// TBD import BackTo from "src/components/back-to";
// import NextGarbageError from "src/component/nextgarbage-error";
import NextGarbageError from "../nextgarbage-error";
import styles from "./red-error.module.scss";

const RedError: FC = () => {
return (
    <div className={styles["red-error"]} data-auto="red-error">
      {/* TBD <BackTo /> */}
            <NextGarbageError type={NEXTGARBAGE_ERROR_TYPE.RED_ERROR} />
    </div>
);
};

export default RedError;
