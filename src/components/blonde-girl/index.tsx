import React, { FC, ReactElement } from 'react';
import styles from "./blonde-girl.module.scss";

type BlondeGirlProps = {
  name: string,
  id: number,
  bio?: string,
}

const BlondeGirl: FC<BlondeGirlProps> = ({name, id, bio = 'Bio empty'}): ReactElement => {
  return (
    <div className={styles["blonde-girl"]}>
    <div className={styles["blonde-girl__bio"]} data-testid={"blonde-girl__bio"}>
      <h2>Name: {name}, Id: {id}</h2>
      <p>{bio}</p>
    </div>
    </div>
  )
};

export default BlondeGirl;