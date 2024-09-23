import {
    Dispatch
} from "react";
import {
    ViewStyle
} from "react-native";
import {
    IOCoreIconType
} from "../../types";
import {
    WindowsNativeProps,
    AndroidNativeProps,
    IOSNativeProps
} from "@react-native-community/datetimepicker";

export type DateTimePickerMode = "date" | "time" | "datetime" | "countdown";
export type DateTimePickerDisplay = "default" | "spinner";

export type DTP = WindowsNativeProps | AndroidNativeProps | IOSNativeProps;

export type DateTimePickerRef = {
    setState: Dispatch<Date>;
    state: Date | null;
};

type IDateTimePickerProps = Omit<DTP, "value" | "mode" | "display"> & {
    onChange?: (date: Date, formattedDate: string) => void;
    display: DateTimePickerDisplay;
    infoIcon?: IOCoreIconType;
    mode: DateTimePickerMode;
    initialValue: Date;
    disabled?: boolean;
    is24Hour?: boolean;
    style?: ViewStyle;
    infoText?: string;
    isClick?: boolean; 
    isError?: boolean;
    title: string;
}

export type DateTimePickerStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    disabled?: boolean;
    infoText?: string;
    isError?: boolean;
    isClick?: boolean;
};

export type TitleProps = {
    textColor: keyof IOCore.ColorsType;
    color: keyof IOCore.ColorsType;
};

export type InfoTextIconProps = {
    color: string | keyof IOCore.ColorsType;
};

export type InfoTextColorProps = {
    color: keyof IOCore.ColorsType;
};

export type DateTimePickerStylerResult = {
    infoTextIconColor: InfoTextIconProps;
    infoTextColor: InfoTextColorProps;
    infoTextContainer: ViewStyle;
    infoIconStyler: ViewStyle;
    titleProps: TitleProps;
    titleStyle: ViewStyle;
    customIcon: ViewStyle;
    container: ViewStyle;
};
export default IDateTimePickerProps;
