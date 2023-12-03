import {
    ViewStyle
} from "react-native";

export type SelectedItem = {
    title: string;
    key: string;
};

export type SelectBoxInitialData = {
    __originalIndex: number;
    __title: string;
    __key: string;
};

export interface ISelectBoxProps<T> {
    onChange?: (selectedItems: Array<SelectedItem>, data: Array<T | SelectBoxInitialData>) => void;
    onPress?: (selectedItems: Array<SelectedItem>, data: Array<T | SelectBoxInitialData>) => void;
    onOk?: (
        selectedItems: Array<SelectedItem>,
        closeSheet: () => void,
        onSuccess: () => void,
        data: Array<T | SelectBoxInitialData>
    ) => void;
    titleExtractor: (item: T, index: number) => string;
    keyExtractor?: (item: T, index: number) => string;
    isLoadingOKButton?: boolean;
    isNeedConfirm?: boolean;
    multiSelect?: boolean;
    maxChoice?: number;
    minChoice?: number;
    disabled?: boolean;
    inputTitle: string;
    data: Array<T>;
    title: string;
};

export type SelectBoxStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
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
    contentProps: ContentProps,
    titleProps: TitleProps,
    container: ViewStyle
};
