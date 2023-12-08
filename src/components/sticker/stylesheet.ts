import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    StickerStylerParams,
    StickerStylerResult,
    TitleProps 
} from "./types";
import {
    IIOCoreIconPropsType,
} from "../../types";

export const styles = StyleSheet.create({
    container: {
        alignSelf: "baseline",
        flexDirection: "row",
        alignItems: "center"
    }
});

const stickerStyler = ({
    titleColor,
    radiuses,
    spaces,
    colors,
    style
}: StickerStylerParams): StickerStylerResult => {
    let container: ViewStyle = {
        ...style,
        paddingHorizontal: spaces.inline * 1.5,
        paddingVertical: spaces.inline,
        backgroundColor: colors.primary,
        borderRadius: radiuses.quarter -1 
    };

    let titleProps: TitleProps = {
        color: "textWhite",
        style: {
        }
    };

    let iconContainerStyle: ViewStyle = {
        marginRight: spaces.inline
    };

    let iconProps: IIOCoreIconPropsType = {
        color: colors.body,
        size: 14
    };

    if(titleColor) {
        iconProps.color = colors[titleColor];
        iconProps.color = colors[titleColor];
        titleProps.color = titleColor;
    }

    return {
        iconContainerStyle,
        titleProps,
        container,
        iconProps
    };
};

export default stickerStyler;