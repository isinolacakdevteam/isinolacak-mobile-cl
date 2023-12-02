import {
    ViewStyle
} from "react-native";
import {
    ModalizeProps
} from "react-native-modalize";
import IPageContainerProps from "../pageContainer/types";
import {
    Dispatch, SetStateAction 
} from "react";

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
    buttonsContainerProps: ViewStyle;
    contentContainerStyle: ViewStyle;
    searchContainerProps: ViewStyle;
    pageContainerStyle: ViewStyle;
    clearButtonProps: ViewStyle;
    inputIconProps: ViewStyle;
    okButtonProps: ViewStyle;
    childrenStyle: ViewStyle;
    modalStyle: ViewStyle;
    rootStyle: ViewStyle;
};

export type SelectedItem = {
    title: string;
    key: string;
};

export type SelectSheetInitialData = {
    __originalIndex: number;
    __title: string;
    __key: string;
};

interface ISelectSheetProps<T> extends Omit<ModalizeProps, "adjustToContentHeight" | "snapPoint" | "ref"> {
    onChange?: (selectedItems: Array<SelectedItem>, data: Array<T>) => void;
    onPress?: (selectedItems: Array<SelectedItem>, data: Array<T>) => void;
    setSelectedItems: Dispatch<Array<SelectedItem>>;
    pageContainerProps?: IPageContainerProps;
    selectedItems: Array<SelectedItem>;
    pageContainerStyle?: ViewStyle;
    childrenStyle?: ViewStyle;
    modalStyle?: ViewStyle;
    multiSelect?: boolean;
    rootStyle?: ViewStyle;
    inputTitle?: string;
    autoHeight?: boolean;
    fullScreen?: boolean;
    snapPoint?: number;
    data: Array<T>;
};
export default ISelectSheetProps;
