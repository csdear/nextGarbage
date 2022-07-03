import React, { FC } from "react";
import styles from "./simple-list.module.scss";

/**
 * LIT1: Simple List ITEMS and simple list ITEM Component Definition.
 * See also LIT2: instantiation and prop passing in pages/index.tsx  
 */

/**
 * Simple List ITEM
 * @param listItem - a single list item { item: value} from the JSON file.   
 * @returns html element <li> with output of the data.  
 */
const SimpleListItem: FC<SimpleListItem> = ({listItem}) => {
    return <li>{listItem.title} - {listItem.userId} - {listItem.completed.toString()} - {listItem.id}</li>
}

/**
 * Simple list for the ITEMS
 * @param listItems - json data object [{}] 
 * @returns list of items 
 */
const SimpleList: FC<SimpleList> = ({ listItems }) => {
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