import * as React from "react";

import { ILeftHalfImage } from "./LeftHalfImage";
import styles from "./LeftHalfImage.module.scss";

const LeftHalfImage: React.FunctionComponent<ILeftHalfImage.IProps> = ({
    children,
}): JSX.Element => {
    return (
        <>
            <div className={styles.imageContainer}>{children}</div>
        </>
    );
};

export { LeftHalfImage };
