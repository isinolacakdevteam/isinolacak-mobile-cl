import {
    ReactElement 
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType 
} from "../../types";
import {
    TextStyle, 
    ViewStyle 
} from "react-native";
import {
    IButtonProps 
} from "../button/types";

export interface IStateCardProps {
    titleColor?: keyof IOCore.ColorsType;
    content?: string | ReactElement;
    action?: IButtonProps;
    icon?: IOCoreIconType;
    style?: ViewStyle;
    title: string;
};

export type StateCardStylerParams = {
    titleColor?: keyof IOCore.ColorsType;
    spaces: IOCore.SpacesTokensType;
    content?: string | ReactElement;
    IconProp?: IOCoreIconType;
    colors: IOCore.ColorsType;
    style?: ViewStyle;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type StateCardStylerResult = {
    iconProps: IIOCoreIconPropsType;
    iconContainer: ViewStyle;
    titleStyler: TitleProps;
    actionProps: ViewStyle;
    container: ViewStyle;
};
