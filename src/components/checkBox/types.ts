import {
    ViewStyle,
    TextStyle
} from "react-native";

export type CheckBoxSpreadBehaviour = "baseline" | "stretch" | "free";

export interface ICheckBoxProps {
    spreadBehaviour?: CheckBoxSpreadBehaviour;
    onChange?: (isSelected: boolean) => void;
    titleType?: keyof IOCore.TypographyType;
    titleStyle?: TextStyle;
    isSelected?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

export type CheckBoxStylerParams = {
    spreadBehaviour: CheckBoxSpreadBehaviour;
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

export type CheckBoxStylerResult = {
    checkContainer: ViewStyle;
    checkIndicator: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
};
