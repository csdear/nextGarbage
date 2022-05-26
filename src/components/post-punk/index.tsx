import { FC } from 'react';
import styles from './post-punk.module.scss';

interface Props {
  //or just ust 'type'
  title: string;
  children: JSX.Element; // explicitly defined. for some reason my implicit for children not working atm.
}

const PostPunk: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles['big-root-class']}>
      <section>
        <div
          className={styles['big-root-class__someSubDiv']}
          data-testid="big-root-class__someSubDiv"
        >
          <h1>Post Punk - {title} &#9760;</h1>
          {children}
          <br />
          <a>See all Posts...punk</a>
        </div>
      </section>
    </div>
  );
};

export default PostPunk;
