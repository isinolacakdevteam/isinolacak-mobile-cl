import {
    TextInputProps,
    ViewStyle,
    TextStyle
} from "react-native";

type TextInputSizes = "small" | "medium" | "large";

interface ITextInputProps extends Omit<TextInputProps, "value" | "onChangeText" | "onFocus" | "onBlur" | "multiline"> {
    onChangeText?: (value: string) => void;
    clearEnabled?: boolean;
    size?: TextInputSizes;
    initialValue?: string;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

export type TextInputStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    typography: IOCore.TypographyType;
    spaces: IOCore.SpacesTokensType;
    disabledStyle: ViewStyle;
    colors: IOCore.ColorsType;
    size: TextInputSizes;
    isFocused: boolean;
    disabled?: boolean;
    value: string;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type TextInputStylerResult = {
    contentContainer: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
    input: TextStyle;
};

export type TextInputStyle = {
    contentContainer: ViewStyle;
    container: ViewStyle;
};

export type TextInputStyleMappingType = {
    small: TextInputStyle;
    medium: TextInputStyle;
    large: TextInputStyle;
};

export default ITextInputProps;
