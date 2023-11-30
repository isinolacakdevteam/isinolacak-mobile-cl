import {
    ViewStyle 
} from "react-native";

export interface ISelectBoxProps {
    selectionLength?: string;
    selectionName: string;
    multiSelect?: boolean;
    isSelected: boolean;
    disabled?: boolean;
    title: string;
};

export type SelectBoxStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
};

export type SelectBoxStylerResult = {
    container: ViewStyle,
};