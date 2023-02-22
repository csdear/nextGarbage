import type { FC } from "react";
import { NEXTGARBAGE_ERROR_TYPE } from "src/constants/constants";
// TBD import BackTo from "src/components/back-to";
// import NextGarbageError from "src/component/nextgarbage-error";
import NextGarbageError from "../nextgarbage-error";
import styles from "./blue-error.module.scss";

const BlueError: FC = () => {
return (
    <div className={styles["blue-error"]} data-auto="blue-error">
      {/* TBD <BackTo /> */}
            <NextGarbageError type={NEXTGARBAGE_ERROR_TYPE.BLUE_ERROR} />
    </div>
);
};

export default BlueError;
