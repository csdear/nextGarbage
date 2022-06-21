import React, { FC, ReactElement } from 'react';
import styles from "./image-list.module.scss";
import { IImage } from "../../types"

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

//1. main props
interface ImageListProps {
    images: IImage[];
}

//2. item props
interface ImageListItemProps {
    image: IImage;
}

//3. Sub-internal-component for Item
// - uses interface ImageListItemProps
const ImageListItem: FC<ImageListItemProps> = ({ image }) => {
    return (
        <img src={image.url} alt={image.description}></img>
    );
}


//4. Main ImageList component hosting the items
// ReactElement needed?
const ImageList: FC<ImageListProps> = ({ images }): ReactElement => {
    return (
    <div className={styles["image-list"]}>
        <div className={styles["image-list__content"]} data-testid={"image-list__content"}>
            {/* MAP OUT IMAGES HERE */}
            <h1>Typescript Image list</h1>
            {images.map((image, index) => (
                <ImageListItem key={index} image={image} />
            ))}
        </div>
    </div>
    )
};

export default ImageList;