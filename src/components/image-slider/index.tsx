import {motion, useCycle} from 'framer-motion';
import React, {FC, useRef, useEffect, useState} from 'react';
import styles from './image-slider.module.scss'
import images from '../../assets/images';

interface ImageSliderProps {
    MacGuffin?: string;
}

const ImageSlider: FC<ImageSliderProps> = ({ MacGuffin='Framer Motion' }) => {
console.log('img_Arr', images);

// Create a state which is our width that we need to scroll
// grab the width of our parent. Outer width (carousel) is much wider though not seen. because of
// overflow hidden. LO 18:56
// we will use  useRef to essentially get an element and get alot of information about it.
// like get the width. like a query selector in vanilla js. Simply create a var for useReef hook
// and add attribute ref={var} to what you want to monitor.
// Use a useEffect with an empty dep that will run when compoinent gets mounted. And what you can
// do is console.log out carousel to see the data properties of the object via thee .current property.
// interesting too because you could get the  current, must up to date class name, which might be important
// to you because on render a new class name is gnerated, eg : <div class="image-slider_image-slider__carousel__p4QA8"
// How much width is needed? One trick is to inspect the element, drag to the last elemnt and note the translate(x) value.
// around -781 pixels for me.  But if we console log carousel.current.scrollWidth, we get 1138px -- totally  doesnt
//match that translatex() value of -781 px.  grab the full width (1920) .1920 minus 781 = 1139px
// if  we console log :  console.log(carousel.current.scrollWidth, carousel.current.offsetWidth); we get
// 1920 1135. 1920 - 1135 = 785. That sum value is close to our original calculation of 1920
// with that we can invoke setWidth to  update the state
// attribute whileTap={"grabbing"} makes it to where cursor rollover the entire canrousel area is a open hand to grabbed hand on click as opposed to a mouse pointer.
const [width, setWidth] = useState(0);
// useRef "Object is possibly undefined"
// fixed by generic HTMLDivElement -- see https://github.com/typescript-cheatsheets/react/issues/187
const carousel = useRef<HTMLDivElement>();

useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    const scrollWidth = carousel.current.scrollWidth;
    const offsetWidth = carousel.current.offsetWidth;
    setWidth( scrollWidth - offsetWidth);  //Sets constraint boundry for Left
}, [])

return (
    <div className={styles["image-slider"]}>
        <div className={styles["image-slider__someSubDiv"]}>
            <motion.h1 animate={{ x:250 }}>ImageSlider - {MacGuffin}</motion.h1>
            <motion.div ref={carousel} className={styles["image-slider__carousel"]}>
                {/*Add drag to the inner container to move. outer (carousel will not move*/}
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{ cursor: "grabbing"}} className={styles["image-slider__inner-carousel"]}>
                    {images.map((image, index) => {
                        return(
                            <motion.div className={styles["image-slider__item"]} key={image.src}>
                                {/* WOW this console log was causing the TS error "This JSX tag's 'children' prop
                                expects a single child of type 'ReactNode', but multiple children were provided."
                                but was resolved when we simply commented out or removed the console.log*/}
                                {/* {console.log('this img index:', index)} */}
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