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
    localize: (translationKey: keyof IOCore.TranslationType) => string;
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
            primary: keyof ColorsType;
            secondary: keyof ColorsType;
            body: keyof ColorsType;
            constrastBody: keyof ColorsType;
            layer1: keyof ColorsType;
            layer2: keyof ColorsType;
            layer3: keyof ColorsType;
            panel: keyof ColorsType;
            warning: keyof ColorsType;
            warning50: keyof ColorsType;
            error: keyof ColorsType;
            error50: keyof ColorsType;
            danger: keyof ColorsType;
            success: keyof ColorsType;
            success50: keyof ColorsType;
            accent: keyof ColorsType;
            attention: keyof ColorsType;
            info: keyof ColorsType;
            seperator: keyof ColorsType;
            hideBody: keyof ColorsType;
            black: keyof ColorsType;
            white: keyof ColorsType;
            backgroundDark: keyof ColorsType;
            backgroundLight: keyof ColorsType;
            stroke: keyof ColorsType;
            textDark: keyof ColorsType;
            textSecondary: keyof ColorsType;
            textGrey: keyof ColorsType;
            textWhite: keyof ColorsType;
            black50: keyof ColorsType;
            black100: keyof ColorsType;
            black200: keyof ColorsType;
            grey25: keyof ColorsType;
            grey50: keyof ColorsType;
            grey100: keyof ColorsType;
            grey200: keyof ColorsType;
            greyBase: keyof ColorsType;
            grey700: keyof ColorsType;
            gray0: keyof ColorsType;
            gray10: keyof ColorsType;
            gray20: keyof ColorsType;
            gray30: keyof ColorsType;
            gray40: keyof ColorsType;
            gray50: keyof ColorsType;
            gray60: keyof ColorsType;
            gray70: keyof ColorsType;
            gray80: keyof ColorsType;
            gray90: keyof ColorsType;
            gray92: keyof ColorsType;
            gray94: keyof ColorsType;
            gray96: keyof ColorsType;
            gray98: keyof ColorsType;
            gray100: keyof ColorsType;
            modalBackground: keyof ColorsType;
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
            "active-theme": string;
            "active-language": string;
            "isinolacak-cl": string;
            "welcome-description": string;
        }
    }
}
