import Header from "../header";

import React, { FC, ReactNode  } from "react";
import styles from "./site-layout.module.scss";

interface SiteLayoutProps {
    children: ReactNode;
}

const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {

return (
    <>
    {/* header here */}
    <Header />
    <main className={styles["site-layout"]} >
        <section>{children}</section>
    {/* TBD SideBar */}
    </main>
    {/* TBD Footer here */}
    </>
);
};

export default SiteLayout;