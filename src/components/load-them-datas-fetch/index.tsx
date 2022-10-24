import React, { FC, useEffect, useState } from "react";
import styles from "./load-them-datas-fetch.module.scss";

interface LoadThemDatasFetchProps {
    subreddit?: string;
}

const LoadThemDatasFetch: FC<LoadThemDatasFetchProps> = ({ subreddit='battlestations' }) => {

    const [posts, setPosts] = useState([])];

    useEffect(async () => {
        // use a template stringg to set the URL :
        const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
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