// PicoPost.js
// ref : https://dev.to/franca/react-children-2k4e

import { FC } from 'react';
import styles from './post-pico.module.scss';

interface Props {
  heading: string;
  children: JSX.Element; // explicitly defined. for some reason my implicit for children not working atm.
}

const PicoPostMain = ({ content }) => {
  return <div className={styles['post__main']}>{content}</div>;
};

const PicoPost: FC<Props> = ({ heading, children }) => {
  return (
    <section>
      <div className={styles['post']}>
        {/* {styles["big-root-class__input"]} */}
        <h1 className={styles['post__heading']}>{heading}</h1>
        <PicoPostMain content={children} />
      </div>
      <a>See all posts</a>
    </section>
  );
};

export default PicoPost;
