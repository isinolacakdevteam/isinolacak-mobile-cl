import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    ButtonStylerParams,
    ButtonStylerResult, 
    LoadingProps, 
    TitleProps
} from "./types";
import {
    SIZE_TO_STYLE_MAPPING
} from "./constants";
import {
    IIOCoreIconPropsType 
} from "../../types";

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    loadingContainer: {
        position: "relative"
    },
    loading: {
        alignSelf: "center"
    }
});

const buttonStyler = ({
    displayBehaviourWhileLoading,
    spreadBehaviour,
    disabledStyle,
    iconDirection,
    iconColor,
    textColor,
    radiuses,
    disabled,
    loading,
    borders,
    variant,
    colors,
    spaces,
    title,
    color,
    icon,
    size
}: ButtonStylerParams): ButtonStylerResult => {
    let container: ViewStyle = {
        backgroundColor: variant === "filled" ? colors[color] : "transparent",
        borderColor: variant !== "ghost" ? colors[color] : "transparent",
        ...SIZE_TO_STYLE_MAPPING[size].container,
        borderWidth: borders.indicator,
        borderRadius: size === "xSmall" ? radiuses.half : radiuses.half * 1.5
    };

    let titleColor: keyof IOCore.ColorsType = textColor ? textColor : "body";

    let titleProps: TitleProps = {
        color: titleColor,
        variant: size === "xSmall" ? "body3-medium" : "body2-medium",
        style: {
        }
    };

    if(loading) {
        if(displayBehaviourWhileLoading === "disabled") {
            container.opacity = 0.5;
        }
    }

    if(!textColor) {
        if(variant !== "filled") {
            titleColor = color;
        } else {
            titleColor = "constrastBody";
        }
        titleProps.color = titleColor;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(icon && title) {
        if(iconDirection === "left") {
            titleProps.style = {
                ...titleProps.style,
                marginLeft: spaces.inline
            };
        } else {
            titleProps.style = {
                ...titleProps.style,
                marginRight: spaces.inline
            };
        }
    }

    let iconProps: IIOCoreIconPropsType = {
        size: 18,
        color: iconColor ? colors[iconColor] : colors[titleColor]
    };

    let loadingProps: LoadingProps = {
        containerSize: "body2-medium",
        color: colors[titleColor],
        size: "small"
    };

    return {
        loadingProps,
        titleProps,
        iconProps,
        container
    };
};
export default buttonStyler;
