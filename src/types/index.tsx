import {
    FC
} from "react";
import {
    SvgProps
} from "react-native-svg";
import IDialogProps from "../components/dialog/types";
import IBottomSheetProps from "../components/bottomSheet/types";
import {
    ModalizeProps 
} from "react-native-modalize";

export type ButtonDisplayBehaviourWhileLoading = "none" | "disabled";

export interface IIOCoreIconPropsType extends SvgProps {
    color?: string;
    size?: number;
};

export type IOCoreIconType = FC<IIOCoreIconPropsType>;

export type LocaleConfig = {
    code: string;
    isRTL: boolean;
    translations: Record<keyof IOCore.TranslationType, string>;
};

export type LanguageType = {
    locales?: Array<{
        code: string;
        translations: IOCore.TranslationType;
        isRTL: boolean;
    }>;
    initialLanguage?: string;
};

export type LocaleContextType = {
    localize: (translationKey: keyof IOCore.TranslationType, parameters?: Array<any>) => string;
    translations: Record<keyof IOCore.TranslationType, string>;
    activeLocale: string;
    isRTL: boolean;
};

export type ThemeType = {
    themes?: Array<IOCore.ThemeType>;
    initialThemeKey?: string;
};

export type ThemeContextType = {
    activeTheme: "light" | "dark" | string;
    typography: IOCore.TypographyType;
    colors: IOCore.ColorsType;
    spaces: IOCore.SpacesTokensType;
    borders: IOCore.BordersTokensType;
    radiuses: IOCore.RadiusesTokensType;
    disabled: IOCore.DisabledTokensType;
};

export type DialogTypeForModalType = IDialogProps & {
    type: "dialog";
    key: string;
};

export type BottomSheetTypeForModalType = ModalizeProps & IBottomSheetProps & {
    type: "bottomsheet";
    isVisible: boolean;
    key: string;
};

export type ModalDataType = DialogTypeForModalType | BottomSheetTypeForModalType;

export type ModalContextType = {
    open: (modalData: ModalDataType) => void;
    close: (props: {
        index?: number;
        key?: string;
    }) => void;
    data: Array<ModalDataType>;
};

export type ModalStateContextType = {
    data: Array<ModalDataType>;
};

export type IOCoreContextConfigType = {
    onStorageUpdate?: (state: any) => void;
    onSetStateFromStorage?: () => any;
    isSaveState?: boolean;
    key: string;
};

export type SelectObjectType = {
    __originalIndex: number;
    __title: string;
    __key: string;
};

export type IOCoreThemeKeyType = IOCore.ThemeKeyType;
export type IOCoreThemeType = IOCore.ThemeType;
export type IOCoreTypographyType = IOCore.TypographyType;
export type IOCoreColorsType = IOCore.ColorsType;
export type IOCoreTypographyVariantType = IOCore.TypograpghyVariantType;
export type IOCoreDesignTokesType = IOCore.DesignTokensType;
export type IOCoreSpacesTokensType = IOCore.SpacesTokensType;
export type IOCoreBordersTokensType = IOCore.BordersTokensType;
export type IOCoreRadiusesTokensType = IOCore.RadiusesTokensType;
export type IOCoreDisabledTokensType = IOCore.DisabledTokensType;
export type IOCoreTranslationType = IOCore.TranslationType;

declare global {
    namespace IOCore {
        type ThemeKeyType = "light" | "dark" | string;

        interface ThemeType {
            key: ThemeKeyType;
            typography?: TypographyType;
            colors?: ColorsType;
            designTokens?: DesignTokensType;
        }

        interface TypographyType {
            "header1-regular"?: TypograpghyVariantType;
            "header1-medium"?: TypograpghyVariantType;
            "header1-semiBold"?: TypograpghyVariantType;
            "header1-bold"?: TypograpghyVariantType;
            "header2-regular"?: TypograpghyVariantType;
            "header2-medium"?: TypograpghyVariantType;
            "header2-semiBold"?: TypograpghyVariantType;
            "header2-bold"?: TypograpghyVariantType;
            "header3-regular"?: TypograpghyVariantType;
            "header3-medium"?: TypograpghyVariantType;
            "header3-semiBold"?: TypograpghyVariantType;
            "header3-bold"?: TypograpghyVariantType;
            "header4-regular"?: TypograpghyVariantType;
            "header4-medium"?: TypograpghyVariantType;
            "header4-semiBold"?: TypograpghyVariantType;
            "header4-bold"?: TypograpghyVariantType;
            "header5-regular"?: TypograpghyVariantType;
            "header5-medium"?: TypograpghyVariantType;
            "header5-semiBold"?: TypograpghyVariantType;
            "header5-bold"?: TypograpghyVariantType;
            "body-regular"?: TypograpghyVariantType;
            "body-medium"?: TypograpghyVariantType;
            "body-semiBold"?: TypograpghyVariantType;
            "body-bold"?: TypograpghyVariantType;
            "body2-regular"?: TypograpghyVariantType;
            "body2-medium"?: TypograpghyVariantType;
            "body2-semiBold"?: TypograpghyVariantType;
            "body2-bold"?: TypograpghyVariantType;
            "body3-regular"?: TypograpghyVariantType;
            "body3-medium"?: TypograpghyVariantType;
            "body3-semiBold"?: TypograpghyVariantType;
            "body3-bold"?: TypograpghyVariantType;
            "body4-regular"?: TypograpghyVariantType;
            "body4-medium"?: TypograpghyVariantType;
            "body4-semiBold"?: TypograpghyVariantType;
            "body4-bold"?: TypograpghyVariantType;
            "caption-regular"?: TypograpghyVariantType;
            "caption-medium"?: TypograpghyVariantType;
            "caption-semiBold"?: TypograpghyVariantType;
            "caption-bold"?: TypograpghyVariantType;
        }

        interface ColorsType {
            primary: string;
            secondary: string;
            body: string;
            constrastBody: string;
            layer1: string;
            layer2: string;
            layer3: string;
            panel: string;
            warning: string;
            warning50: string;
            error: string;
            fillsSecondary: string;
            error50: string;
            danger: string;
            success: string;
            success50: string;
            accent: string;
            attention: string;
            info: string;
            seperator: string;
            hideBody: string;
            black: string;
            white: string;
            backgroundDark: string;
            backgroundLight: string;
            stroke: string;
            textDark: string;
            textSecondary: string;
            textGrey: string;
            textWhite: string;
            black50: string;
            black100: string;
            black200: string;
            grey25: string;
            grey50: string;
            grey100: string;
            grey200: string;
            greyBase: string;
            grey700: string;
            gray0: string;
            gray10: string;
            gray20: string;
            gray30: string;
            gray40: string;
            gray50: string;
            gray60: string;
            gray70: string;
            gray80: string;
            gray90: string;
            gray92: string;
            gray94: string;
            gray96: string;
            gray98: string;
            gray100: string;
            modalBackground: string;
            featuredAdFrontColor: string;
            featuredAdBackColor: string;
            newAdFrontColor: string;
            newAdBackColor: string;
            announcementFrontColor: string;
            announcementBackColor: string;
            trustedFrontColor: string;
            trustedBackColor: string;
        }

        type TypograpghyVariantType = {
            fontFamily: string;
            fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
            fontSize: number;
            lineHeight?: number;
            letterSpacing?: number;
            textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
        }

        interface DesignTokensType {
            spaces: SpacesTokensType;
            borders: BordersTokensType;
            radiuses: RadiusesTokensType;
            disabled: DisabledTokensType;
        }

        interface SpacesTokensType {
            container: number;
            content: number;
            inline: number;
            item: number;
        }

        interface BordersTokensType {
            indicator: number;
            line: number;
        }

        interface RadiusesTokensType {
            quarter: number;
            hard: number;
            half: number;
        }

        interface DisabledTokensType {
            opacity: number;
        }

        interface TranslationType {
            IOCoreDefaultDialogSecondaryButtonTitle: string;
            IOCoreDefaultDialogPrimaryButtonTitle: string;
            IOCoreSelectBoxSelectedText: string;
            IOCoreSelectBoxNoSelectionText: string;
            IOCoreSelectBoxMinSelectionWarningText: string;
            IOCoreSelectBoxMaxSelectionReachedText: string;
            IOCoreSelectBoxSelectAll: string;
            IOCoreSelectBoxClearAll: string;
            "iocore-select-sheet-clear-button": string;
            "iocore-select-box-no-selection": string;
            "iocore-select-sheet-max-choice": string;
            "iocore-select-sheet-min-choice": string;
            "iocore-select-sheet-ok-button": string;
            "iocore-select-box-n-selected": string;
            "active-theme": string;
            "active-language": string;
            "isinolacak-cl": string;
            "welcome-description": string;
            "optional": string;
            "selectionCount": string;
            "advert-sticker-announcement": string;
            "advert-sticker-trusted": string;
            "advert-sticker-newAd": string;
            "advert-sticker-featuredAds": string;
        }
    }
}
