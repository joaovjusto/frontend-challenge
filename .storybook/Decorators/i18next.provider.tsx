import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
const path = require("path");

const prefix = process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/static/locales/{{lng}}/{{ns}}`
    : "../locales/{{lng}}/{{ns}}";

i18n.use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: "pt",
        debug: true,
        ns: ["common"],
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: path.join(__dirname, `${prefix}.json`),
            addPath: path.join(__dirname, `${prefix}.missing.json`),
        },
        react: {
            useSuspense: false,
        }
    });

export const withI18next = () => (story: any) => {
    return <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>;
};
