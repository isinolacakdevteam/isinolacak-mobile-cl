import {
    ViewStyle
} from "react-native";
import {
    IOCoreColorsType
} from "../../types";
import {
    TextStyle 
} from "react-native";

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
    spaces: IOCore.SpacesTokensType;
    color?: keyof IOCore.ColorsType;
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
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}
