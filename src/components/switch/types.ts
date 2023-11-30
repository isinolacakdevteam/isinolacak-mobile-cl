import {
    TextStyle,
    ViewStyle 
} from "react-native";

export type SwitchSpreadBehaviour = "baseline" | "stretch" | "free";

export interface ISwitchProps {
    spreadBehaviour?: SwitchSpreadBehaviour;
    onPress?: () => void;
    isActive?: boolean;
    disabled?: boolean;
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
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type SwitchStylerResult = {
    switchContainer: ViewStyle;
    titleProps: TitleProps;
    indicator: ViewStyle;
    container: ViewStyle;
};
