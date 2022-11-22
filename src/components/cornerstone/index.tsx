import { FC } from "react";
import styles from "./cornerstone.module.scss";

const Cornerstone: FC = () => {
  return (
    <div className={styles["cornerstone"]} data-testid={"cornerstone"}>
      <hr />
      <div className={styles["cornerstone__content"]}>
        <h1>Cornerstone</h1>
      </div>
      <hr />
    </div>
  );
};

export default Cornerstone;

/*
Order of Hardness:
Talc
Gypsum
Calcite
Fluorite
Apatite
Feldspar
Quartz
Topaz
Corundum
Diamond

OR:
Boulder
Cobble
Pebble
Sand
Silt
Clay
*/