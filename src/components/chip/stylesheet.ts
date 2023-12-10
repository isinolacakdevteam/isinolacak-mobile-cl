import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    ChipStylerParams,
    ChipStylerResult,
    TitleProps 
} from "./types";
import {
    IIOCoreIconPropsType 
} from "../../types";

export const styles = StyleSheet.create({
    container: {
        alignSelf: "baseline",
        flexDirection: "row",
        alignItems: "center"
    }
});

const chipStyler = ({
    disabledStyle,
    titleColor,
    disabled,
    borders,
    selected,
    radiuses,
    spaces,
    colors,
    color,
    size,
    style
}: ChipStylerParams): ChipStylerResult => {
    let container: ViewStyle = {
        ...style,
        paddingHorizontal: size === "small" ? spaces.container : spaces.container * 1.5,
        paddingVertical: spaces.content * 1.5,
        borderRadius: radiuses.half + 2,
        backgroundColor: colors.layer2,
        borderColor: colors.stroke,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: "textDark",
        style: {
        }
    };

    let iconProps: IIOCoreIconPropsType = {
        color: colors[titleProps.color],
        size: 14
    };

    let closeIconProps: IIOCoreIconPropsType = {
        color: colors[titleProps.color],
        size: 14
    };

    if(selected) {
        if(color) {
            container.backgroundColor = colors[color];
            container.borderColor = colors[color];
            titleProps.color = "white";
        } else {
            container.backgroundColor = colors.primary;
            container.borderColor = colors.primary;
            titleProps.color = "white";
        }
    } else if(color) {
        titleProps.color = color;
    }

    if(titleColor) {
        iconProps.color = colors[titleColor];
        titleProps.color = titleColor;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    return {
        closeIconProps,
        titleProps,
        container,
        iconProps
    };
};
export default chipStyler;
