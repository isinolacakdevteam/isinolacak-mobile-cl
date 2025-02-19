import {
    FlatListProps,
    ViewStyle
} from "react-native";
import {
    IIOCoreIconPropsType,
    SelectObjectType,
    IOCoreIconType
} from "../../types";
import IBottomSheetHeaderProps from "../bottomSheetHeader/type";

export type SelectedItem = {
    __originalIndex: number;
    __title: string;
    __key: string;
};

export interface ISelectBoxRefProps<T> {
    updateSelectedItems: (p: {
        getCurrentSelectedItems?: (
            selectedItems: Array<SelectedItem>,
            update: (processedSelectedItems: Array<T & {
                originalIndex?: number;
            }>) => void
        ) => void,
        newSelectedItems?: Array<T & {
            originalIndex?: number;
        }>
    }) => void;
};

export interface ISelectBoxProps<T> {
    onChange?: (selectedItems: Array<SelectedItem>, data: Array<SelectObjectType>) => void;
    onPress?: (selectedItems: Array<SelectedItem>, data: Array<SelectObjectType>) => void;
    onOk?: (props: {
        selectedItems: Array<SelectedItem>;
        data: Array<T | SelectObjectType>;
        closeSheet: () => void;
        onSuccess: () => void;
    }) => void;
    renderItem?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onClick?: (item: T & SelectObjectType) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            data: Array<T & SelectObjectType>;
            closeSheet: () => void;
            onSuccess: () => void;
        }) => void;
        selectedItems: Array<SelectedItem>;
        data: Array<T | SelectObjectType>;
        item?: T | SelectObjectType;
        isSelected?: boolean;
        index?: number;
    }) => JSX.Element;
    renderIcon?: (props: IIOCoreIconPropsType & {
        onChange?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onPress?: (selectedItems: Array<SelectedItem>, data: Array<T & SelectObjectType>) => void;
        onOk?: (props: {
            selectedItems: Array<SelectedItem>;
            data: Array<T & SelectObjectType>;
            closeSheet: () => void;
            onSuccess: () => void;
        }) => void;
        selectedItems: Array<SelectedItem>;
        data: Array<T | SelectObjectType>;
        item?: T | SelectObjectType;
        isSelected?: boolean;
        index?: number;
    }) => IOCoreIconType;
    titleExtractor: (item: T, index: number) => string;
    keyExtractor: (item: T, index: number) => string;
    onSearch?: (searchText: string) => void;
    initialSelectedItems?: Array<T & {
        originalIndex: number;
    }>;
    flatListProps?: Omit<FlatListProps<any>, "data" | "renderItem">;
    bottomSheetProps?: IBottomSheetHeaderProps;
    isLoadingOKButton?: boolean;
    infoIcon?: IOCoreIconType;
    isNeedConfirm?: boolean;
    showGoBackSize?: number;
    isHeaderShown?: boolean;
    isSearchable?: boolean;
    multiSelect?: boolean;
    maxChoice?: number;
    minChoice?: number;
    disabled?: boolean;
    inputTitle: string;
    isError?: boolean;
    infoText?: string;
    style?: ViewStyle;
    isClick?: boolean;
    data: Array<T>;
    title: string;
    onClear: () => void;
};

export type SelectBoxStylerParams = {
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
    color: keyof IOCore.ColorsType;
};

export type InfoTextIconProps = {
    color: string | keyof IOCore.ColorsType;
};

export type InfoTextColorProps = {
    color: keyof IOCore.ColorsType;
};

export type ContentProps = {
    color: keyof IOCore.ColorsType;
    style: ViewStyle;
};

export type SelectBoxStylerResult = {
    infoTextIconColor: InfoTextIconProps;
    infoTextColor: InfoTextColorProps;
    infoTextContainer: ViewStyle;
    contentProps: ContentProps;
    infoIconStyler: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
};
