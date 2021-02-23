declare namespace ILocaleButton {
    export interface IProps {
        lang: string;
        onClick: (param: any) => void;
        isActive: boolean;
        disabled: boolean;
    }
}

export { ILocaleButton };
