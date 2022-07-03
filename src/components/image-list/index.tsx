import React, { FC, ReactElement } from 'react';
import styles from "./image-list.module.scss";


//prop passed in will be something like  .....
// const photos = [{"fileName":"planes.jpeg","description":"A-10 warthog","featured":true,"id":"001"},
// {"fileName":"trains.jpeg","description":"Steam Engine","featured":false,"id":"002"},
// {"fileName":"automobiles.jpeg","description":"Corvette Stingray","featured":false,"id":"003"}];

//best way to pass in an object and use as an interface or type props.?
// REF: https://stackoverflow.com/questions/68251172/how-to-pass-an-object-as-a-prop-in-react-using-typescript
// Take notes how interface can be internal OR exported like they are  doing here^
// also interesting with interfaces vs  types, is that you dont use an object literal with interface.
// you dont use a '=' equal sign like  you do with type.  doing something like "interface Car = {}" is going
// to give you ts errors, 'string' only refers to a type, but is being used as a value here.
// Also might be useful when styling images with flexbox :  https://www.developerdrive.com/responsive-image-gallery-flexbox/

//1. main props (moved to types.d.ts)


//2. item props (moved to types.d.ts)


//3. Sub-internal-component for Item
// - uses interface ImageListItem
const ImageListItem: FC<ImageListItem> = ({ image }) => {
    return (
        <div className={styles["image-list__items"]} data-testid={"image-list__items"}>
        <img src={image.url} alt={image.description}></img>
        <h1>{image.id}</h1>
        {image.featured && (<p>Featured!</p>) }
        </div>
    );
}


//4. Main ImageList component hosting the items
// ReactElement needed?
const ImageList: FC<ImageList> = ({ images }): ReactElement => {
    return (
    <div className={styles["image-list"]}>
        <h1>Typescript Image list</h1>
        <div className={styles["image-list__container"]} data-testid={"image-list__container"}>
            {/* MAP OUT IMAGES HERE */}
            {images.map((image, index) => (
                <ImageListItem key={index} image={image} />
            ))}
        </div>
    </div>
    )
};

export default ImageList;