import React, { FC, useState } from "react";
import styles from "src/components/accordion/accordion.module.scss";
import faqData from "public/faqData.json";
import cn from "classnames";

interface AccordionProps {
    title: string;
    content: string;
    }

//sidecar
const Header = () => {
    return (
    <h1>
        FAQ help section
    </h1>
    )
};

//sidecar
const AccordionItem = ({ faq, onToggle, active }) => {  //... onToggle a fn() prop rec'd. active if t or f.
    const { question, answer } = faq;
        return (
            // <li className={styles["accordion__list-item"]}>
            <li className={styles["accordion__list-item"]}> {/* if active append style... */}
                <button className={cn(styles["accordion__list-button"], active && styles["accordion__list-button--active"])} onClick={onToggle}> {/* onToggle() prop bound to onClick */}
                    {question}
                    <span className={styles["accordion__list-control"]}>{active ? "—" : "+"}</span>
                </button>
                <div className={cn(styles["accordion__list-answer-wrapper"], active && styles["accordion__list-answer-wrapper--open"])}>
                    <div className={styles["accordion__list-answer"]}>{answer}xxx</div>
                </div>
            </li>
        );
};



const Accordion: FC<AccordionProps> = () => {
    // const Accordion: FC<AccordionProps> = ({ title, content }) => {
    // const [isExpanded, setIsExpanded] = useState(false);
    const [clicked, setClicked] = useState(0);
    const handleToggle = (index) => {  //...receives clicked index and updates the state value.
        console.log('current index:', index);
        if (clicked === index) {
            return setClicked(0);
            }
            setClicked(index);
        };

    // const toggleAccordion = () => {
    //     setIsExpanded(!isExpanded);
    // };

    return (
        <div className={styles["accordion"]}>
            <div className={styles["accordion__container"]}>
            {/* <div className={styles["accordion__header"]} onClick={toggleAccordion}> */}
                <div className={styles["accordion__header"]}>
                    <Header />
                </div>
                <div className={styles["accordion__list"]} >
                <ul>
                    {faqData.faqs.map((faq, index) => (
                        <AccordionItem
                            onToggle={() => handleToggle(index)}
                            active={clicked === index}  //yuck I dont like toStringing  this... instead lets make this pure numeric for clicked and index.
                            key={index}
                            faq={faq} />
                    ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Accordion;