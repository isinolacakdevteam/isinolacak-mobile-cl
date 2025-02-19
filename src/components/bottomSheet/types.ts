import {
    ViewStyle
} from "react-native";
import {
    ModalizeProps
} from "react-native-modalize";
import IPageContainerProps from "../pageContainer/types";

export type BottomSheetRef = {
    close: () => void,
    open: () => void,
    setModalSelectedItems?: (newSelectedItems: any) => void
};

export type BottomSheetStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    pageContainerStyleProp?: ViewStyle;
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

interface IBottomSheetProps extends Omit<ModalizeProps, "children" | "adjustToContentHeight" | "snapPoint" | "ref"> {
    pageContainerProps?: IPageContainerProps;
    children?: JSX.Element | JSX.Element[];
    pageContainerStyle?: ViewStyle;
    childrenStyle?: ViewStyle;
    modalStyle?: ViewStyle;
    rootStyle?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
    snapPoint?: number;
};
export default IBottomSheetProps;
