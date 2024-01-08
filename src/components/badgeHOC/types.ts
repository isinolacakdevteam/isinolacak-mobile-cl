import {
    ViewStyle
} from "react-native";
import {
    IOCoreColorsType,
    IOCoreIconType
} from "../../types";

export interface IBadgeHOCProps {
    children: JSX.Element | JSX.Element[];
    borderColor?: IOCoreColorsType;
    color?: IOCoreColorsType;
    location?: LocationType,
    isActive?: Boolean;
    style?: ViewStyle;
    count?: number;
};

export type BadgeHOCStylerParams = {
    disabledStyle: IOCore.DisabledTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCoreColorsType;
};

export type BadgeHOCStylerResult = {
    container: ViewStyle;
};

export type LocationType = {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}
