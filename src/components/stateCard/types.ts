import {
    ReactElement 
} from "react";
import {
    IIOCoreIconPropsType,
    IOCoreIconType 
} from "../../types";
import {
    TextStyle, ViewStyle 
} from "react-native";

export interface IStateCardProps {
    content?: string | ReactElement;
    icon?: IOCoreIconType;
    style?: ViewStyle;
    title: string;
};

export type StateCardStylerParams = {
    spaces: IOCore.SpacesTokensType;
    IconProp?: IIOCoreIconPropsType;
    colors: IOCore.ColorsType;
    content?: ViewStyle;
    style?: ViewStyle;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type StateCardStylerResult = {
    titleStyler: TitleProps;
    container: ViewStyle;
};