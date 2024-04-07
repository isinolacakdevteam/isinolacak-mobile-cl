import {
    ViewStyle
} from "react-native";
import {
    WindowsNativeProps,
    AndroidNativeProps,
    IOSNativeProps
} from "@react-native-community/datetimepicker";

export type DateTimePickerMode = "date" | "time" | "datetime" | "countdown";
export type DateTimePickerDisplay = "default" | "spinner";

export type DTP = WindowsNativeProps | AndroidNativeProps | IOSNativeProps;

type IDateTimePickerProps = Omit<DTP, "value" | "mode" | "display"> & {
    onChange?: (date: Date, formattedDate: string) => void;
    display: DateTimePickerDisplay;
    mode: DateTimePickerMode;
    disabled?: boolean;
    is24Hour?: boolean;
    style?: ViewStyle;
    title: string;
    value: any;
}

export type DateTimePickerStylerParams = {
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

export type DateTimePickerStylerResult = {
    titleProps: TitleProps;
    titleStyle: ViewStyle;
    customIcon: ViewStyle;
    container: ViewStyle;
};
export default IDateTimePickerProps;
