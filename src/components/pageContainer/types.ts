import {
    ViewStyle
} from "react-native";

interface IPageContainerProps {
    children?: JSX.Element | JSX.Element[];
    contentContainerStyle?: ViewStyle;
    scrollable?: boolean;
    style?: ViewStyle;
};
export default IPageContainerProps;
