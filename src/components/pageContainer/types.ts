import {
    ReactNode,
    RefObject 
} from "react";
import {
    ScrollViewProps,
    ScrollView,
    ViewStyle,
    View
} from "react-native";

interface IPageContainerProps {
    scrollViewRef?: RefObject<ScrollView>;
    contentContainerStyle?: ViewStyle;
    scrollViewProps?: ScrollViewProps;
    viewRef?: RefObject<View>;
    scrollable?: boolean;
    children?: ReactNode;
    style?: ViewStyle;
};
export default IPageContainerProps;
