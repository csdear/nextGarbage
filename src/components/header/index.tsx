import Link from 'next/link';
import { FC } from "react";
import styles from "./header.module.scss";

const path = [
    { uid: 21, name: 'Home', id: 1, path: '/' },
    { uid: 31, name: 'People', id: 2, path: 'people' },
    { uid: 41, name: 'tsreact', id: 3, path: 'tsreact' }
  ];

const Header: FC = () => {
return (
    <div className={styles["header"]}>
        <header>
            <nav>
                <ul>
                {path.map((value) => {
                    return (
                    <li key={value.uid}>
                        <Link href={value.path}>
                        <a> {value.name} </a>
                        </Link>
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