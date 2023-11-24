import {
    StyleSheet
} from "react-native";
import {
    ButtonStylerParams,
    ButtonStylerResult, 
    LoadingProps, 
    TitleProps
} from "./types";
import {
    ViewStyle 
} from "react-native";
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
    iconColor,
    textColor,
    radiuses,
    disabled,
    loading,
    borders,
    variant,
    colors,
    color,
    size
}: ButtonStylerParams): ButtonStylerResult => {
    let container: ViewStyle = {
        backgroundColor: variant === "filled" ? colors[color] : "transparent",
        borderColor: variant !== "ghost" ? colors[color] : "transparent",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderWidth: borders.indicator,
        borderRadius: radiuses.half
    };

    let titleColor: keyof IOCore.ColorsType = textColor ? textColor : "body";

    let titleProps: TitleProps = {
        color: titleColor,
        variant: "body2"
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

    let iconProps: IIOCoreIconPropsType = {
        size: 18,
        color: iconColor ? colors[iconColor] : colors[titleColor]
    };

    let loadingProps: LoadingProps = {
        containerSize: "body2",
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
