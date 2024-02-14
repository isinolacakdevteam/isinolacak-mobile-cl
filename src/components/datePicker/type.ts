import {
    SetStateAction,
    Dispatch
} from "react";
import {
    ViewStyle
} from "react-native";

export interface IDatePickerProps {
    setDate: Dispatch<SetStateAction<Date>>
    display: DatePickerDisplay;
    mode: DatePickerMode;
    disabled?: boolean;
    is24Hour?: boolean;
    style?: ViewStyle;
    title: string;
    date: Date;
}

export type DatePickerMode = "date" | "time" | "datetime";
export type DatePickerDisplay = "default" | "spinner"

export type DatePickerStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    disabled?: boolean;
};

export type TitleProps = {
    textColor: keyof IOCore.ColorsType;
    color: keyof IOCore.ColorsType;
};

export type DatePickerStylerResult = {
    titleProps: TitleProps;
    titleStyle: ViewStyle;
    customIcon: ViewStyle;
    container: ViewStyle;
};
