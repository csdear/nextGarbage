import React, { FC, ReactNode } from "react";
import styles from "./some-text.module.scss";
import cn from "classnames";

type TextAlign = "start" | "end" | "left" | "right" | "center" | "justify" | "justify-all" | "match-parent";



const SomeText: FC<{
    children: ReactNode;
    textAlign?: TextAlign;
    superSized?: boolean;
}> = ({ children, textAlign, superSized }) => {

    const classNames = cn({
        [styles["some-text"]]: "some-text",  // A. base or root css styles. 4eg, this applies the  dashed dotted line
        [styles[`some-text_textAlign_${textAlign}`]]: textAlign, // B. typescriptful SASS
        [styles["some-text_superSized"]]: superSized, // C.  Booly props w/no explicit value. Based on Grid 'item' and 'container'
        // Note: this style hates the hyphen,  won't work [styles.some-text_superSized]: superSized,

      });
    // eg CDT OUT
    //<div class="some-text_some-text_textAlign_center__Sjy7U"><p>[...]</p></div>
return (
    <div className={classNames}>
        {children}
    </div>
);
};

export default SomeText;