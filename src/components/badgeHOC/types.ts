import {
    ViewStyle,
    TextStyle
} from "react-native";
import {
    IOCoreColorsType
} from "../../types";

export type BadgeHOCSpreadBehaviour = "baseline" | "stretch" | "free";
export interface IBadgeHOCProps {
    spreadBehaviour?: BadgeHOCSpreadBehaviour;
    children: JSX.Element | JSX.Element[];
    borderColor?: keyof IOCoreColorsType;
    color?: keyof IOCoreColorsType;
    location?: LocationType,
    borderWidth?: number;
    isActive?: Boolean;
    style?: ViewStyle;
    count?: number;
    size?: number;
};

export type BadgeHOCStylerParams = {
    spreadBehaviour?: BadgeHOCSpreadBehaviour;
    borderColor?: keyof IOCore.ColorsType;
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    color?: keyof IOCore.ColorsType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType
    location?: LocationType;
    borderWidth?: number;
    count?: number;
    size: number;
};

export type BadgeHOCStylerResult = {
    badgeContainer: ViewStyle;
    textStyler: TextStyle;
    container: ViewStyle;
};

export type LocationType = {
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
}
