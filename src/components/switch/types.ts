import {
    TextStyle,
    ViewStyle,
    StyleProp
} from "react-native";

export type SwitchSpreadBehaviour = "baseline" | "stretch" | "free";
export interface ISwitchProps {
    spreadBehaviour?: SwitchSpreadBehaviour;
    indicatorStyle?: ViewStyle;
    titleStyle?: TextStyle;
    onPress?: () => void;
    isActive?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
    renderTitle?: (props: {
        titleVariant: keyof IOCore.TypographyType;
        spreadBehaviour?: SwitchSpreadBehaviour;
        titleStyle?: StyleProp<TextStyle>;
        color: keyof IOCore.ColorsType;
        isActive?: boolean;
    }) => JSX.Element;
};

export type SwitchStylerParams = {
    disabledStyle: IOCore.DisabledTokensType;
    spreadBehaviour?: SwitchSpreadBehaviour;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    isActive: boolean;
    disabled: boolean;
    title?: string;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type SwitchStylerResult = {
    switchContainer: ViewStyle;
    titleProps: TitleProps;
    indicator: ViewStyle;
    container: ViewStyle;
};
