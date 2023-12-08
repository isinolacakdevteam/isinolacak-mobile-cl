import {
    ViewStyle,
    TextStyle 
} from "react-native";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "../../types";

export interface IStickerProps {
    titleColor?: keyof IOCore.ColorsType;
    color?: keyof IOCore.ColorsType;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    icon?: IOCoreIconType;
    title?: string;
};

export type StickerStylerParams = {
    titleColor?: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    color: keyof IOCore.ColorsType;
    colors: IOCore.ColorsType;
    style?: ViewStyle;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type StickerStylerResult = {
    iconProps: IIOCoreIconPropsType;
    iconContainerStyle: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
};