import {
    TextStyle
} from "react-native";
import {
    TextProps
} from "react-native";
import {
    StyleProp
} from "react-native";

interface ITextProps extends TextProps {
    variant?: keyof IOCore.TypographyType;
    color?: keyof IOCore.ColorsType;
    style?: StyleProp<TextStyle>;
};
export default ITextProps;
