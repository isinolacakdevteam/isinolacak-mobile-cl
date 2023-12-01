import {
    ViewStyle
} from "react-native";

export type SelectedItem = {
    title: string;
    key: string;
};

export interface ISelectBoxProps<T> {
    onChange?: (selectedItems: Array<SelectedItem>) => void;
    onPress?: (selectedItems: Array<SelectedItem>) => void;
    multiSelect?: boolean;
    disabled?: boolean;
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
