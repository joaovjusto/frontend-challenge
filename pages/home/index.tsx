// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "../../server/i18n";
import { LeftHalfImage, LoginForm } from "../../src/Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "../../src/Interfaces";
import { Container } from "../../src/Styled/Home";
// #endregion Interface Imports

const Home: React.FunctionComponent<IHomePage.IProps> = (): JSX.Element => {
    return (
        <Container>
            <div className="container-fluid">
                <div className="d-none d-sm-block">
                    <div className="row">
                        <div className="col-6 p-0">
                            <LeftHalfImage />
                        </div>
                        <div className="col-6">
                            <LoginForm />
                        </div>
                    </div>
                </div>
                <div className="d-block d-sm-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <LeftHalfImage>
                                <LoginForm />
                            </LeftHalfImage>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Extended = withTranslation("common")(Home);

export default Extended;
