// post-plurality

// import React from 'react';
import { FC } from 'react';
import styles from './plurality-punk.module.scss';

interface Props {
  heading: string;
  children: JSX.Element; // explicitly defined. for some reason my implicit for children not working atm.
}

const PostIntro = ({ children }) => {
  return <div className="post__intro">{children}</div>;
};

const PostMain = ({ children }) => {
  return <div className="post__main">{children}</div>;
};

const PostOutro = ({ children }) => {
  return (
    <div className="post__outro">
      {children}
      <a>See all posts</a>
    </div>
  );
};

const Post: FC<Props> = ({ heading, children }) => {
  return (
    <section>
      <div className="post">
        <h1 className="post__heading">{heading}</h1>
        {children}
      </div>
    </section>
  );
};

export { PostIntro, PostMain, PostOutro, Post };
