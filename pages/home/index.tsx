// #region Global Imports
import React, { useState } from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "../../server/i18n";
import { Heading, LocaleButton } from "../../src/Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "../../src/Interfaces";
import {
    Container,
    Top,
    TopText,
    Middle,
    MiddleLeft,
    MiddleLeftButtons,
    MiddleRight,
} from "../../src/Styled/Home";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const [repositories, setRepositories] = useState([
        { title: "teste" },
        { title: "teste" },
    ]);

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr", "pt"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    return (
        <Container>
            <Top>
                <img src="/images/pankod-logo.png" alt="Pankod Logo" />
            </Top>
            <Middle>
                <MiddleLeft>
                    <MiddleLeftButtons>
                        {renderLocaleButtons(i18n.language)}
                    </MiddleLeftButtons>
                </MiddleLeft>
                <MiddleRight>
                    <TopText>{repositories[0].title}</TopText>
                    <Heading text={t("common:World")} />
                </MiddleRight>
            </Middle>
        </Container>
    );
};

const Extended = withTranslation("common")(Home);

export default Extended;
