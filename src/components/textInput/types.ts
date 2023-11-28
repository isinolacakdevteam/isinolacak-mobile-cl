import {
    TextInputProps,
    ViewStyle,
    TextStyle
} from "react-native";
import {
    IIOCoreIconPropsType,
    IOCoreIconType 
} from "../../types";
type TextInputSizes = "small" | "medium" | "large";

interface ITextInputProps extends Omit<TextInputProps, "value" | "onChangeText" | "onFocus" | "onBlur" | "multiline"> {
    onChangeText?: (value: string) => void;
    iconDirection?: "left" | "right";
    clearEnabled?: boolean;
    size?: TextInputSizes;
    icon?: IOCoreIconType;
    initialValue?: string;
    isRequired?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
    hint?: string;
};

export type TextInputStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    typography: IOCore.TypographyType;
    iconDirection?: "left" | "right";
    spaces: IOCore.SpacesTokensType;
    icon?: IOCoreIconType;
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
    iconProps: IIOCoreIconPropsType;
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
