import {
    ViewStyle,
    TextStyle
} from "react-native";

export type RadioButtonSpreadBehaviour = "baseline" | "stretch" | "free";

export interface IRadioButtonProps {
    spreadBehaviour?: RadioButtonSpreadBehaviour;
    onChange?: (isSelected: boolean) => void;
    titleType?: keyof IOCore.TypographyType;
    titleStyle?: TextStyle;
    isSelected?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

export type RadioButtonStylerParams = {
    spreadBehaviour: RadioButtonSpreadBehaviour;
    disabledStyle: IOCore.DisabledTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    titleStyle?: TextStyle;
    isSelected?: boolean;
    disabled?: boolean;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type RadioButtonStylerResult = {
    radioContainer: ViewStyle;
    radioIndicator: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
};
