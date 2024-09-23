import {
    TextInputProps,
    ViewStyle,
    TextStyle
} from "react-native";
import {
    IOCoreIconType
} from "../../types";

interface ITextAreaProps extends Omit<TextInputProps, "value" | "onChangeText" | "onFocus" | "onBlur" | "multiline"> {
    onChangeText?: (value: string) => void;
    infoIcon?: IOCoreIconType;
    clearEnabled?: boolean;
    initialValue?: string;
    isTextLimit?:boolean;
    isRequired?: boolean;
    onFocus?: () => void;
    placeholder?: string;
    onBlur?: () => void;
    textLimit?: number;
    disabled?: boolean;
    style?: ViewStyle;
    isError?: boolean;
    infoText?: string;
    title?: string;
};

export type TextInputStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    typography: IOCore.TypographyType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    disabledStyle: ViewStyle;
    isFocused: boolean;
    disabled?: boolean;
    infoText?: string;
    isError?: boolean;
    value: string;
};

export type TitleProps = {
    titleVariant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type InfoTextIconProps = {
    color: string | keyof IOCore.ColorsType;
};

export type InfoTextColorProps = {
    color: keyof IOCore.ColorsType;
};

export type TextInputStylerResult = {
    infoTextIconColor: InfoTextIconProps;
    infoTextColor: InfoTextColorProps;
    infoTextContainer: ViewStyle;
    contentContainer: ViewStyle;
    infoIconStyler: ViewStyle;
    optionalStyle: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
    input: TextStyle;
};

export type TextInputStyle = {
    contentContainer: ViewStyle;
    container: ViewStyle;
};

export default ITextAreaProps;
