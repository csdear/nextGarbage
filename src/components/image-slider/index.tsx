import {motion} from 'framer-motion';
import React, {FC, useRef, useEffect, useState} from 'react';
import styles from './image-slider.module.scss'
import images from '../../assets/images';

interface ImageSliderProps {
    MacGuffin?: string;
}

const ImageSlider: FC<ImageSliderProps> = ({ MacGuffin='Framer Motion' }) => {
console.log('img_Arr', images);
// Create a state which is our width that we need to scroll
// grab the width of our parent. LO 18:56
const [width, setWidth] = useState(0);

return (
    <div className={styles["image-slider"]}>
        <div className={styles["image-slider__someSubDiv"]}>
            <motion.h1 animate={{ x:250 }}>ImageSlider - {MacGuffin}</motion.h1>
            <motion.div className={styles["image-slider__carousel"]}>
                {/*Add drag to the inner container to move. outer (carousel will not move*/}
                <motion.div drag="x" dragConstraints={{right: 0}} className={styles["image-slider__inner-carousel"]}>
                    {images.map(image => {
                        return(
                            <motion.div className={styles["image-slider__item"]}>
                                <img src={image.src} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>


        </div>
    </div>
);
};

export default ImageSlider;