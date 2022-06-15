import React, { FC, ReactElement, useState } from 'react';
import styles from "./blonde-girl.module.scss";

type BlondeGirlProps = {
  name: string,
  id: number,
  bio?: string,
  initialClick?: number,
}

const BlondeGirl: FC<BlondeGirlProps> = ({name, id, bio = 'Bio empty', initialClick = 0}): ReactElement => {
  const [click, setClick] = useState(initialClick);
  return (
    <div className={styles["blonde-girl"]}>
    <div className={styles["blonde-girl__bio"]} data-testid={"blonde-girl__bio"}>
      <h2>Name: {name}, Id: {id}</h2>
      <p>{bio}</p>
      <div className={styles["blonde-girl__clickArea"]} data-testid={"blonde-girl__clickArea"}>
        <p>Click: {click}</p>
        <button onClick={() => setClick(click + 1)}>Click Me</button>
        </div>
    </div>

    </div>
  )
};

export default BlondeGirl;