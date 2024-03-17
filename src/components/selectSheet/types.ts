import {
    Dispatch
} from "react";
import {
    FlatList,
    ViewStyle
} from "react-native";
import IPageContainerProps from "../pageContainer/types";
import IBottomSheetHeaderProps from "./../bottomSheetHeader/type";
import {
    IIOCoreIconPropsType,
    SelectObjectType,
    IOCoreIconType
} from "../../types";
import {
    ModalizeProps
} from "react-native-modalize";

export type SelectSheetRef = {
    close: () => void,
    open: () => void
};

export type SelectSheetStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    pageContainerStyleProp?: ViewStyle;
    spaces: IOCore.SpacesTokensType;
    childrenStyleProp?: ViewStyle;
    modalStyleProp?: ViewStyle;
    rootStyleProp?: ViewStyle;
    colors: IOCore.ColorsType;
    autoHeight?: boolean;
    fullScreen?: boolean;
};

export type SelectSheetStylerResult = {
    contentContainerStyle: ViewStyle;
    buttonsContainerProps: ViewStyle;
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
    BottomSheetHeaderProps?: IBottomSheetHeaderProps;
    pageContainerProps?: IPageContainerProps;
    onSearch?: (searchText: string) => void;
    selectedItems: Array<SelectedItem>;
    flatListProps?: typeof FlatList;
    pageContainerStyle?: ViewStyle;
    isLoadingOKButton?: boolean;
    childrenStyle?: ViewStyle;
    isHeaderShown?: boolean;
    isNeedConfirm?: boolean;
    isSearchable?: boolean;
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
    title: string;
};
export default ISelectSheetProps;


