import {
    ViewStyle
} from "react-native";

interface IPageContainerProps {
    contentContainerStyle?: ViewStyle;
    children?: JSX.Element;
    scrollable?: boolean;
    style?: ViewStyle;
};
export default IPageContainerProps;
