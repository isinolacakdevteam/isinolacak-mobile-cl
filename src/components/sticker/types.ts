import {
    ViewStyle,
    TextStyle 
} from "react-native";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "../../types";

export type StickerSpreadBehaviour = "baseline" | "stretch" | "free";
export type Stickertype = "filled" | "outline" | "ghost";

export interface IStickerProps {
    spreadBehaviour?: StickerSpreadBehaviour;
    titleColor?: keyof IOCore.ColorsType;
    color?: keyof IOCore.ColorsType;
    type?: Stickertype;
    icon?: IOCoreIconType;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

export type StickerStylerParams = {
    spreadBehaviour?: StickerSpreadBehaviour;
    titleColor?: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    color: keyof IOCore.ColorsType;
    colors: IOCore.ColorsType;
    type: Stickertype;
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