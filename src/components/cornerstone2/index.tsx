import { FC } from "react";
import styles from "./cornerstone2.module.scss";

const Cornerstone2: FC = () => {

  const minerals = [
    'Talc',
    'Gypsum',
    'Calcite',
    'Fluorite',
    'Apatite',
    'Feldspar',
    'Quartz',
    'Topaz',
    'Corundum',
    'Diamond'
  ];

  function getLowerCaseMineralName(mineral) {
    const mineralLowerCase = mineral.toLowerCase();
    return mineralLowerCase;
  }

  return (
    <div className={styles["cornerstone2"]} data-testid={"cornerstone2"}>
      <hr />
      <div className={styles["cornerstone2__content"]}>
        <h1>Cornerstone2</h1>
        <ul>
        {minerals.map((item, index) => (
          <li key={index}>
            {getLowerCaseMineralName(item)}
          </li>
        ))}
      </ul>
      </div>
      <hr />
    </div>
  );
};

export default Cornerstone2;

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