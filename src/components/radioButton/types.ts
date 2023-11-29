import {
    ViewStyle
} from "react-native";
import {
    IOCoreColorsType,
    IOCoreDisabledTokensType,
    IOCoreIconType,
    IOCoreTypographyType
} from "../../types";

export type RadioButtonSpreadBehaviour = "baseline" | "stretch" | "free";

export interface IRadioButtonProps {
    spreadBehaviour?: RadioButtonSpreadBehaviour;
    onChange?: (selected: boolean) => void;
    titleType?: keyof IOCoreTypographyType;
    uncheckedIcon?: IOCoreIconType;
    checkedIcon?: IOCoreIconType;
    disabled?: boolean;
    selected?: boolean;
    style?: ViewStyle;
    title?: string;
};

export type RadioButtonStylerParams = {
    spreadBehaviour: RadioButtonSpreadBehaviour;
    disabledStyle: IOCoreDisabledTokensType;
    colors: IOCoreColorsType;
    disabled?: boolean;
};

export type RadioButtonStylerResult = {
    container: ViewStyle;
    checkedRadio: ViewStyle;
    radioContainer: ViewStyle;
};