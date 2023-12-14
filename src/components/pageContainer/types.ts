import {
    ReactNode 
} from "react";
import {
    ViewStyle
} from "react-native";

interface IPageContainerProps {
    contentContainerStyle?: ViewStyle;
    children?: ReactNode;
    scrollable?: boolean;
    style?: ViewStyle;
};
export default IPageContainerProps;
