
import cn from "classnames";
import Link from "next/link";
import type { FC } from "react";
import styles from "./acme-button.module.scss";

interface AcmeButtonProps {
    identificationNumber?: string;
    className?: string;
    someName?: string;
}

const AcmeButton: FC<AcmeButtonProps> = ({
    identificationNumber,
    className,
    someName,
}) => {

return (
    <Link href={`/area/deepPath/${identificationNumber}`} data-auto="acme-button">
        <button className={cn(styles["acme-button__link"], className)}>Some Link</button>
    </Link>
    );
};

export default AcmeButton;
