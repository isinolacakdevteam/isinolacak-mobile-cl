import {
    RefObject
} from "react";
import {
    ViewStyle
} from "react-native";
import {
    BottomSheetRef
} from "../bottomSheet/types";

export interface IDatePickerProps {
    DateTimePickerSheetRef: RefObject<BottomSheetRef>;
    // onChange: (date: Date) => void;
    handlePosition?: handlePosition;
    display: DatePickerDisplay;
    autoHeight?: boolean;
    mode: DatePickerMode;
    onPress: () => void;
    style?: ViewStyle;
    disabled: boolean;
    is24Hour: boolean;
    title: string;
    size: number;
    value: Date;
}

export type DatePickerMode = "date" | "time" | "datetime";
export type DatePickerDisplay = "default" | "spinner"
export type handlePosition= "inside" | "outside";

export type DatePickerStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    disabled?: boolean;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
};

export type DatePickerStylerResult = {
    titleProps: TitleProps;
    container: ViewStyle;
};
