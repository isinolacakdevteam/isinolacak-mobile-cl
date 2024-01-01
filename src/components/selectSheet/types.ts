import {
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
    SelectObjectType,
    IOCoreIconType
} from "../../types";

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

interface ISelectSheetProps<T, K extends T & SelectObjectType> extends Omit<ModalizeProps, "adjustToContentHeight" | "snapPoint" | "ref"> {
    onChange?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
    onPress?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
    setSelectedItems: Dispatch<Array<SelectedItem>>;
    onOk?: (props: {
        selectedItems: Array<SelectedItem>;
        closeSheet: () => void;
        onSuccess: () => void;
        data: Array<K>;
    }) => void;
    renderItem?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            closeSheet: () => void;
            onSuccess: () => void;
            data: Array<K>;
        }) => void;
        selectedItems: Array<SelectedItem>;
        isSelected?: boolean;
        index?: number;
        data: Array<K>;
        item?: K;
    }) => JSX.Element;
    renderIcon?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<K>) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            closeSheet: () => void;
            onSuccess: () => void;
            data: Array<K>;
        }) => void;
        selectedItems: Array<SelectedItem>;
        isSelected?: boolean;
        index?: number;
        data: Array<K>;
        item?: K;
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
    initialData: Array<T>;
    autoHeight?: boolean;
    fullScreen?: boolean;
    inputTitle?: string;
    maxChoice?: number;
    minChoice?: number;
    snapPoint?: number;
    data: Array<K>;
};
export default ISelectSheetProps;
