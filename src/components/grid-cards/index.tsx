import React, { FC } from 'react';
import styles from './grid-cards.module.scss';

// This could be expanded further to accept props or children for h2, p and href.
interface GridCardsProps {

}

const GridCards: FC<GridCardsProps> = () => {

return (
<section className={styles["grid-cards"]}>
      <div className={styles["grid-cards__grid"]}>
          <a href="https://nextjs.org/docs" className={styles["grid-cards__card"]}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles["grid-cards__card"]}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles["grid-cards__card"]}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles["grid-cards__card"]}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </section>
)
}
export default GridCards;