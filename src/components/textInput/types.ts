import {
    TextInputProps,
    ViewStyle,
    TextStyle,
    TextInput
} from "react-native";
import {
    IOCoreIconType
} from "../../types";

export type TextInputSizes = "small" | "medium" | "large";

interface ITextInputProps extends Omit<TextInputProps, "value" | "onChangeText" | "onFocus" | "onBlur" | "multiline"> {
    inputRef?: (input: TextInput | null) => void;
    renderInfoSheetContent?: () => JSX.Element;
    onValidate?: (text: string) => boolean;
    onChangeText?: (value: string) => void;
    isValidateOnChangeText?: boolean;
    iconDirection?: "left" | "right";
    infoSheetIcon?: IOCoreIconType;
    hintIcon?: IOCoreIconType;
    secureTextEntry?: boolean;
    iconOnPress?: () => void;
    clearEnabled?: boolean;
    isInfoSheet?: boolean;
    icon?: IOCoreIconType;
    size?: TextInputSizes;
    initialValue?: string;
    isShowable?: boolean;
    isRequired?: boolean;
    isOptional?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    hintText?: string;
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
    size: TextInputSizes;
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

export type HintTextProps = {
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type TextInputStylerResult = {
    hintContainerStyle: ViewStyle;
    hintTextProps: HintTextProps;
    contentContainer: ViewStyle;
    optionalStyle: ViewStyle;
    hintIconStyle: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
    input: TextStyle;
};

export type TextInputStyle = {
    contentContainer: ViewStyle;
    container: ViewStyle;
};

export type TextInputStyleMappingType = {
    medium: TextInputStyle;
    small: TextInputStyle;
    large: TextInputStyle;
};

export default ITextInputProps;
