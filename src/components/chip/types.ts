import {
    ViewStyle,
    TextStyle
} from "react-native";
import {
    IIOCoreIconPropsType,
    IOCoreIconType 
} from "../../types";

export type ChipSizetype = "small" | "medium";

export interface IChipProps {
    titleColor?: keyof IOCore.ColorsType;
    color?: keyof IOCore.ColorsType;
    icon?: IOCoreIconType;
    onPress: () => void;
    size?: ChipSizetype;
    selected?: boolean;
    closable?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

export type ChipStylerParams = {
    titleColor?: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    color: keyof IOCore.ColorsType;
    colors: IOCore.ColorsType;
    disabledStyle: ViewStyle;
    size: ChipSizetype;
    selected: boolean;
    style?: ViewStyle;
    disabled: boolean;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
    style: TextStyle;
};

export type ChipStylerResult = {
    closeIconProps: IIOCoreIconPropsType;
    iconProps: IIOCoreIconPropsType;
    titleProps: TitleProps;
    container: ViewStyle;
};