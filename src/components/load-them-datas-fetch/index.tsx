import React, { FC, useEffect, useState } from "react";
import styles from "./load-them-datas-fetch.module.scss";

interface LoadThemDatasFetchProps {
    subreddit?: string;
}

const LoadThemDatasFetch: FC<LoadThemDatasFetchProps> = ({ subreddit='battlestations' }) => {

    const [posts, setPosts] = useState([]);
    // Argument of type '() => Promise<void>' is not assignable to parameter of type 'EffectCallback'.
    //Type 'Promise<void>' is not assignable to type 'void | Destructor'.ts(2345)
    // useEffect(async () => {
    //     // use a template stringg to set the URL :
    //     const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    // }, [subreddit, setPosts]);

    // https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
// � Ship it
    useEffect(() => {
        (async () => {
            const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        })();

        return () => {
        // this now gets called when the component unmounts
        };
    }, [subreddit, setPosts]);

return (
    <div className={styles["load-them-datas-fetch"]}>
    <div className={styles["load-them-datas-fetch__someSubDiv"]}>
        <h1>Component - LoadThemDatasFetch - {MacGuffin}</h1>
        <h2>Pizza Size : Jumbo</h2>
    </div>
    </div>
);
};

export default LoadThemDatasFetch;