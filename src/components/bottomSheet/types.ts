import {
    ViewStyle
} from "react-native";
import {
    ModalizeProps
} from "react-native-modalize";
import IPageContainerProps from "../pageContainer/types";

export type BottomSheetRef = {
    close: () => void,
    open: () => void
};

export type BottomSheetStylerParams = {
    pageContainerStyleProp?: ViewStyle;
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    childrenStyleProp?: ViewStyle;
    modalStyleProp?: ViewStyle;
    rootStyleProp?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
};

export type BottomSheetStylerResult = {
    contentContainerStyle: ViewStyle;
    pageContainerStyle: ViewStyle;
    childrenStyle: ViewStyle;
    modalStyle: ViewStyle;
    rootStyle: ViewStyle;
};

interface IBottomSheetProps extends Omit<ModalizeProps, "adjustToContentHeight" | "snapPoint" | "ref"> {
    pageContainerProps?: IPageContainerProps;
    pageContainerStyle?: ViewStyle;
    childrenStyle?: ViewStyle;
    modalStyle?: ViewStyle;
    rootStyle?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
    snapPoint?: number;
};
export default IBottomSheetProps;
