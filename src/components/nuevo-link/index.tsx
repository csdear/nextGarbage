import type { LinkProps } from "next/link";
import Link from "next/link";
import type { FC, ReactElement } from "react";

interface NuevoLink extends LinkProps {
    "data-auto"?: string;
    className?: string;
    id?: string;
    children: ReactElement[] | ReactElement | any;
}

const NuevoLink: FC<NuevoLink> = ({
    href,
    className,
    "data-auto": dataAuto,
    id,
    children,
    ...rest
}) => {
    const anchorProps = {
        className,
        "data-auto": dataAuto,
        id,
        };

return (
    <Link href={href} {...rest} passHref>
        <a {...anchorProps}>{children}</a>
    </Link>
    );
};

export default NuevoLink;
