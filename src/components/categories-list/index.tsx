import categoriesData from "public/categories.json";
import styles from "./categories-list.module.scss";
import NuevoLink from "src/components/nuevo-link";
import type { FC } from "react";

interface CategoriesListItemProps {
    category: string;
}

export const CategoriesListItem: FC<CategoriesListItemProps> = ({
    category,
}) => {
const urlQueryParams = new URLSearchParams({ category: category });
console.log('urlQueryParams???',urlQueryParams);


// if (browseSortQuery) {
//     urlQueryParams.set("browseSort", browseSortQuery);
// }


return (
    <NuevoLink
        className={styles["categories-list__category-link"]}
        href={`/browse?${urlQueryParams.toString()}`}
        data-auto={"categories-list-item"}
        >
        {category}
    </NuevoLink>
);
};

const CategoriesList: FC = () => {

    const categoryCount = categoriesData?.categories?.length ?? 0;
    console.log('categories count: ', categoryCount);

    return (
    <div className={styles["categories-list"]} data-auto="categories-list">
    {/*NOTE commented the categories header OUT for  the collapso implementation which puts the Explore Categories within  the Collapso Header instead... prevents duplication but you, Future Stuarts needs may vary.  */}
    {/* {categoryCount > 0 && (
        <h2
        className={styles["categories-list__header"]}
        data-auto="catagories-list-header"
        >
        Explore categories
        </h2>
    )} */}

    <div className={styles["categories-list__container"]}>
        {categoriesData?.categories.map((category, index) => (
        <CategoriesListItem
            key={index}
            category={category}
        />
        ))}
    </div>
    </div>
);
};

export default CategoriesList;
