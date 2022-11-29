import Link from 'next/link';
import { FC } from "react";
import styles from "./header.module.scss";
import NavigationLink from '../navigation-link';

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
// import "../../services/font-awesome"; // FA bug
// THIS RENDERS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const urlPath = [
    { uid: 21, name: 'Home', id: 1, path: '/', icon: 'book' },
    { uid: 31, name: 'People', id: 2, path: 'people', icon: 'download' },
    { uid: 41, name: 'tsreact', id: 3, path: 'tsreact', icon: 'cog' }
  ];

const Header: FC = () => {
return (
    <div className={styles["header"]}>
        <header>
            <nav>
                <ul>
                {urlPath.map((link) => {
                    return (
                    <li key={link.uid}>
                        {/* <Link href={value.path}>
                        <a> {value.name} </a>
                        </Link> */}
                        {/* <FontAwesomeIcon icon="cog" /> */}

                        <NavigationLink
                            className= {link.name}
                            title={link.name}
                            href={link.path}
                            icon={link.icon as IconProp}
                            // cannot find cog? ^
                            //test: icon={"book"}
                    />
                    </li>
                    );
                })}
                </ul>
            </nav>
            </header>
    </div>
);
};

export default Header;