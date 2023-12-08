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
    renderTitle?: (props: {
        titleVariant: keyof IOCore.TypographyType;
        spreadBehaviour?: SwitchSpreadBehaviour;
        titleStyle?: StyleProp<TextStyle>;
        color: keyof IOCore.ColorsType;
        isActive?: boolean;
    }) => JSX.Element;
    style?: ViewStyle;
    title?: string;
};

export type SwitchStylerParams = {
    spreadBehaviour?: SwitchSpreadBehaviour;
    disabledStyle: IOCore.DisabledTokensType;
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
