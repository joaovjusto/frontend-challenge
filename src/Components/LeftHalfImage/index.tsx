import * as React from "react";

import { ILeftHalfImage } from "./LeftHalfImage";
import stylesLocal from "./LeftHalfImageLocal.module.scss";
import stylesProd from "./LeftHalfImageProd.module.scss";

const styles = process.env.NEXT_PUBLIC_BASE_PATH ? stylesProd : stylesLocal;

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
