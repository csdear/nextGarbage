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
import "../../services/font-awesome"; // FA bug - navigation-link component not having access to font awesome icon.. wont even render int the standard way.  
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
  console.log('icon', icon);
  return (
    <Link href={href}>
      
      <a {...linkProps}>
      {/* baz
      <FontAwesomeIcon icon="cog" />
      foo */}
        {icon && (
          <FontAwesomeIcon
            className={cn("fa-fw", styles["navigation-link__icon"])}
            icon={icon as IconProp}
          />
        )}
        {title}|NAVLINK|
        
      </a>
    </Link>
  );
};

export default NavigationLink;
