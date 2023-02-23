import cn from "classnames";
import { connect } from "http2";
import type { FC, ReactElement } from "react";
import React  from "react";
import styles from "./content-container.module.scss";

type ContentContainerProps = {
    children: ReactElement[] | ReactElement;
    gray?: boolean;
    red?: boolean;
    className?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({
    children,
    gray,
    red,
    className,
}) => {
    return (
        <div className={styles["content-container"]}>
        {/**cn, classnames module
           * rather  than the usual className={styles["some-class-style"]}
           * we do className={cn()}. We are calling the cn() function.
           * This variant takes as first parameter a classnname, "content-container__content-wrapper" and
           * then appends dynamically a modifier '--gray' style depending on the value of  gray prop passed in.
           */}
        <div className={cn(
            styles["content-container__content-wrapper"],
            gray && styles["content-container__content-wrapper--gray"],
            red && styles["content-container__content-wrapper--red"]
            )}
            data-auto="content-container-wrappper"
            >
            {/** This second cn variant is  more  basic.
             * 2 paramenters, but only condition is if it received a  className to
             * drive the dynamicacism.  className is received as a prop and appened to the base
             * className.  could resolve and render to be content-container__content-ICE or
             * content-container__content-FIRE. Whatever. That way we can render the basic, shared
             * defaulte things, then do some special style processing for .FIRE and  .ICE.
               */}
        <div className={cn(styles["content-container__content"], className)}>
            {children}
        </div>
    </div>
</div>
    );
};

export default ContentContainer;

