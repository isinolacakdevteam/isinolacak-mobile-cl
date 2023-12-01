import {
    ViewStyle
} from "react-native";
import {
    ModalizeProps
} from "react-native-modalize";
import IPageContainerProps from "../pageContainer/types";

export type SelectSheetRef = {
    close: () => void,
    open: () => void
};

export type SelectSheetStylerParams = {
    pageContainerStyleProp?: ViewStyle;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    childrenStyleProp?: ViewStyle;
    modalStyleProp?: ViewStyle;
    rootStyleProp?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
};

export type SelectSheetStylerResult = {
    contentContainerStyle: ViewStyle;
    pageContainerStyle: ViewStyle;
    childrenStyle: ViewStyle;
    modalStyle: ViewStyle;
    rootStyle: ViewStyle;
};

interface ISelectSheetProps extends Omit<ModalizeProps, "adjustToContentHeight" | "snapPoint" | "ref"> {
    pageContainerProps?: IPageContainerProps;
    pageContainerStyle?: ViewStyle;
    childrenStyle?: ViewStyle;
    modalStyle?: ViewStyle;
    rootStyle?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
    snapPoint?: number;
};
export default ISelectSheetProps;
