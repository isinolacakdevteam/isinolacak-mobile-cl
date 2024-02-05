import {
    TextStyle,
    StyleProp,
    TextProps
} from "react-native";
interface ITextProps extends TextProps {
    variant?: keyof IOCore.TypographyType;
    color?: keyof IOCore.ColorsType;
    style?: StyleProp<TextStyle>;
};
export default ITextProps;
