import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    SwitchStylerParams,
    SwitchStylerResult,
    TitleProps
} from "./types";

export const TOGGLE_SIZE = 22;

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    switchContainer: {
        borderRadius: (TOGGLE_SIZE + 8) / 2,
        width: (TOGGLE_SIZE * 2) + 8,
        minHeight: TOGGLE_SIZE + 8,
        padding: 4
    },
    indicator: {
        borderRadius: TOGGLE_SIZE / 2,
        height: TOGGLE_SIZE,
        width: TOGGLE_SIZE
    }
});

const switchStyler = ({
    spreadBehaviour,
    disabledStyle,
    disabled,
    isActive,
    colors,
    spaces,
    title
}: SwitchStylerParams): SwitchStylerResult => {
    let container: ViewStyle = {
        paddingVertical: spaces.container
    };

    let titleProps: TitleProps = {
        style: {
            marginRight: spaces.content
        },
        variant: "body2-regular",
        color: "textGrey"
    };

    let switchContainer: ViewStyle = {
        backgroundColor: colors.fillsSecondary
    };

    let indicator: ViewStyle = {
        backgroundColor: colors.backgroundLight
    };

    if(isActive) {
        switchContainer.backgroundColor = colors.primary;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
    }

    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        titleProps.style.flex = 1;
    }

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
        indicator = {
            backgroundColor: colors.layer3
        };
    }

    if(title) {
        container.paddingHorizontal = spaces.content;
    }

    return {
        switchContainer,
        titleProps,
        container,
        indicator
    };
};
export default switchStyler;
