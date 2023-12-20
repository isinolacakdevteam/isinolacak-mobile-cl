import {
    ReactNode,
    Dispatch
} from "react";
import {
    ViewStyle
} from "react-native";
import {
    ModalizeProps
} from "react-native-modalize";
import IPageContainerProps from "../pageContainer/types";
import {
    IIOCoreIconPropsType,
    IOCoreIconType
} from "../../types";
import {
    ISelectBoxProps
} from "../selectBox/types";

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
    colors: IOCore.ColorsType;
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
    onOk?: (
        selectedItems: Array<SelectedItem>,
        closeSheet: () => void,
        onSuccess: () => void,
        data: Array<T>
    ) => void;
    renderItem?: (props: Omit<Partial<ISelectBoxProps<T>>, "renderItem" | "renderIcon"> & IIOCoreIconPropsType & {
        selectedItems: Array<SelectedItem>;
        isSelected?: boolean;
        index?: number;
        item?: T;
    }) => JSX.Element;
    renderIcon?: (props: Omit<Partial<ISelectBoxProps<T>>, "renderItem" | "renderIcon"> & IIOCoreIconPropsType & {
        selectedItems: Array<SelectedItem>;
        isSelected?: boolean;
        index?: number;
        item?: T;
    }) => IOCoreIconType;
    pageContainerProps?: IPageContainerProps;
    onSearch?: (searchText: string) => void;
    selectedItems: Array<SelectedItem>;
    pageContainerStyle?: ViewStyle;
    isLoadingOKButton?: boolean;
    childrenStyle?: ViewStyle;
    isNeedConfirm?: boolean;
    modalStyle?: ViewStyle;
    multiSelect?: boolean;
    rootStyle?: ViewStyle;
    autoHeight?: boolean;
    fullScreen?: boolean;
    inputTitle?: string;
    maxChoice?: number;
    minChoice?: number;
    snapPoint?: number;
    data: Array<T>;
};
export default ISelectSheetProps;
