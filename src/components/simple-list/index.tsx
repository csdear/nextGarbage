import React, { FC, ReactElement } from "react";
import styles from "./simple-list.module.scss";



// interface SimpleListItem {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

interface SimpleListProps {
    listItems: IListItem[];
}

interface SimpleListItemProps {
    listItem: IListItem;
}

const SimpleListItem: FC<SimpleListItemProps> = ({listItem}) => {
    return <li>{listItem.title} - {listItem.userId} - {listItem.completed.toString()} - {listItem.id}</li>
}


const SimpleList: FC<SimpleListProps> = ({ listItems }): ReactElement => {
return (
    <div className={styles["simple-list"]}>
        <div className={styles["simple-list__someSubDiv"]}>
            <h3>Simple List TS</h3>
            <ul>
            {listItems.map((listItem, index) => (
                <SimpleListItem key={index} listItem={listItem} />
            ))}
            </ul>
        </div>
    </div>
);
};

export default SimpleList;