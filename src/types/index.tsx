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

export type IOCoreContextConfigType = {
    onStorageUpdate?: (state: any) => void;
    onSetStateFromStorage?: () => any;
    isSaveState?: boolean;
    key: string;
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
            header1?: TypograpghyVariantType;
            header2?: TypograpghyVariantType;
            header3?: TypograpghyVariantType;
            header4?: TypograpghyVariantType;
            header5?: TypograpghyVariantType;
            header6?: TypograpghyVariantType;
            header7?: TypograpghyVariantType;
            body?: TypograpghyVariantType;
            body2?: TypograpghyVariantType;
            caption?: TypograpghyVariantType;
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
        }
    }
}
