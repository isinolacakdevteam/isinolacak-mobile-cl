import {
    ActivityIndicatorProps,
    ViewStyle,
    TextStyle,
    StyleProp
} from "react-native";
import {
    ButtonDisplayBehaviourWhileLoading,
    IIOCoreIconPropsType,
    IOCoreIconType 
} from "../../types";

export type ButtonSpreadBehaviour = "baseline" | "stretch" | "free";

export type ButtonVariant = "filled" | "outline" | "ghost";

export type ButtonSize = "small" | "medium" | "large" | "xSmall";

export interface IButtonProps {
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour?: ButtonSpreadBehaviour;
    iconColor?: keyof IOCore.ColorsType;
    textColor?: keyof IOCore.ColorsType;
    titleStyle?: StyleProp<TextStyle>;
    iconDirection?: "left" | "right";
    style?: ViewStyle | ViewStyle[];
    color?: keyof IOCore.ColorsType;
    renderTitle?: (props: {
        spreadBehaviour?: ButtonSpreadBehaviour;
        variant: keyof IOCore.TypographyType;
        titleStyle?: StyleProp<TextStyle>;
        color: keyof IOCore.ColorsType;
        loading?: boolean;
        size: ButtonSize;
    }) => JSX.Element;
    variant?: ButtonVariant;
    icon?: IOCoreIconType;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    title?: string;
};

export type ButtonStylerParams = {
    displayBehaviourWhileLoading: ButtonDisplayBehaviourWhileLoading;
    spreadBehaviour: ButtonSpreadBehaviour;
    radiuses: IOCore.RadiusesTokensType;
    textColor?: keyof IOCore.ColorsType;
    iconColor?: keyof IOCore.ColorsType;
    borders: IOCore.BordersTokensType;
    iconDirection?: "left" | "right";
    spaces: IOCore.SpacesTokensType;
    color: keyof IOCore.ColorsType;
    disabledStyle: ViewStyle;
    colors: IOCore.ColorsType;
    variant: ButtonVariant;
    icon?: IOCoreIconType;
    disabled: boolean;
    loading?: boolean;
    size: ButtonSize;
    title?: string;
};

export type TitleProps = {
    variant: keyof IOCore.TypographyType;
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type LoadingProps = ActivityIndicatorProps & {
    containerSize: keyof IOCore.TypographyType;
};

export type ButtonStylerResult = {
    iconProps: IIOCoreIconPropsType;
    loadingProps: LoadingProps;
    titleProps: TitleProps;
    container: ViewStyle;
};

export type ButtonStyle = {
    container: ViewStyle;
};

export type ButtonStyleMappingType = {
    xSmall: ButtonStyle;
    small: ButtonStyle;
    medium: ButtonStyle;
    large: ButtonStyle;
};
