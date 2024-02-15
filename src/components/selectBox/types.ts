import {
    ViewStyle
} from "react-native";
import {
    IIOCoreIconPropsType,
    SelectObjectType,
    IOCoreIconType
} from "../../types";

export type SelectedItem = {
    title: string;
    key: string;
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
    keyExtractor?: (item: T, index: number) => string;
    onSearch?: (searchText: string) => void;
    initialSelectedItems?: Array<T & {
        originalIndex: number;
    }>;
    titleVariant?: keyof IOCore.TypographyType;
    goBackFrontColor?: keyof IOCore.ColorsType;
    titleColor?: keyof IOCore.ColorsType;
    renderRightProps?: React.ReactNode;
    renderLeft?: () => React.ReactNode;
    isLoadingOKButton?: boolean;
    isNeedConfirm?: boolean;
    showGoBackSize?: number;
    isSearchable?: boolean;
    isShowGoBack?: boolean;
    onGoBack?: () => void;
    multiSelect?: boolean;
    maxChoice?: number;
    minChoice?: number;
    disabled?: boolean;
    inputTitle: string;
    style?: ViewStyle;
    data: Array<T>;
    title: string;
};

export type SelectBoxStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
    disabled?: boolean;
};

export type TitleProps = {
    color: keyof IOCore.ColorsType;
};

export type ContentProps = {
    color: keyof IOCore.ColorsType;
    style: ViewStyle;
};

export type SelectBoxStylerResult = {
    contentProps: ContentProps;
    titleProps: TitleProps;
    container: ViewStyle;
};
