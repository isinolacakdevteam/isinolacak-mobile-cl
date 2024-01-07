import {
    TextInputProps,
    ViewStyle,
    TextStyle
} from "react-native";

interface ITextAreaProps extends Omit<TextInputProps, "value" | "onChangeText" | "onFocus" | "onBlur" | "multiline"> {
    onChangeText?: (value: string) => void;
    clearEnabled?: boolean;
    initialValue?: string;
    isTextLimit?:boolean;
    placeholder?: string;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    textLimit?: number;
    disabled?: boolean;
    style?: ViewStyle;
    isError?: boolean;
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
    isError?: boolean;
    value: string;
};

export type TitleProps = {
    titleVariant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type TextInputStylerResult = {
    contentContainer: ViewStyle;
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
