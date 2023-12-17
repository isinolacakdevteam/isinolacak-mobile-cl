import {
    ReactNode 
} from "react";
import {
    ScrollViewProps,
    ViewStyle
} from "react-native";

interface IPageContainerProps {
    contentContainerStyle?: ViewStyle;
    scrollViewProps?: ScrollViewProps;
    children?: ReactNode;
    scrollable?: boolean;
    style?: ViewStyle;
};
export default IPageContainerProps;
