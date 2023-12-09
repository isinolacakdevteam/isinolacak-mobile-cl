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
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    }
});

const stickerStyler = ({
    spreadBehaviour,
    titleColor,
    radiuses,
    spaces,
    colors,
    color,
    style,
    type
}: StickerStylerParams): StickerStylerResult => {
    let container: ViewStyle = {
        ...style,
        backgroundColor: type === "filled" ? colors[color] : "transparent",
        borderColor: type !== "ghost" ? colors[color] : "transparent",
        borderWidth: type === "outline" ? 1 : 0,
        paddingHorizontal: spaces.inline * 1.5,
        borderRadius: radiuses.quarter -1,
        paddingVertical: spaces.inline
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
        color: colors[titleProps.color],
        size: 12
    };

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(type !== "filled") {
        iconProps.color = colors[color];
        titleProps.color = color;
    }

    if(titleColor) {
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
