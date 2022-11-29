// This is a good component to demonstrate how to
// overrided the base HTML elements.
// This is a Navigation Link, a font awesome icon
// and link.
// In the interface we are overriding, or rather
// Extending an anchor <a>
// See interface interface AnchorHTMLAttributes<T>  within https://unpkg.com/@types/react@16.4.7/index.d.ts


import type { FC } from "react";
import Link from "next/link";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../../services/font-awesome" // FA bug - navigation-link component not having access to font awesome icon.. wont even render int the standard way.
// Odd navigation LInk called from pages index.tsx works, but navigation link called from header does not... "could not find icon"

import cn from "classnames";
import styles from "./navigation-link.module.scss";


interface NavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  icon?: IconProp;
  className?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  title,
  href,
  icon,
  className,
  ...rest
}) => {
  const linkProps = {
    className: cn(styles["navigation-link"], className),
    ...rest,
  };
  console.log('ICON RECD : ', icon);
  return (
    <Link href={href}>
      <a {...linkProps}>
          <div>&nbsp;
          <FontAwesomeIcon
            className={cn("fa-fw", styles["navigation-link__icon"])}
            icon={icon as IconProp}
          />
          </div>

        {title}
      </a>
    </Link>
  );
};

export default NavigationLink;

{/* Next lines are test -- I cannot get eve a simple FontAwesomeIcon to display
      Why does this component not have  access to font awesome dep?
      Odd though if I plug in 'y u no load?' right before on line 52, it works!
      */}
      {/* <FontAwesomeIcon icon="cog" />
      <FontAwesomeIcon icon="book" />
      <FontAwesomeIcon icon="cog" />
      <FontAwesomeIcon icon="download" />
      <FontAwesomeIcon icon="print" /> */}