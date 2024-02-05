import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    RadioButtonStylerParams, 
    RadioButtonStylerResult, 
    TitleProps
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    radioContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13,
        height: 26,
        width: 26
    },
    radioIndicator: {
        borderRadius: 8,
        height: 16,
        width: 16
    },
    title: {
        textAlignVertical: "center",
        flex: 1
    }
});

const radioButtonStyler = ({
    spreadBehaviour,
    disabledStyle,
    titleStyle,
    disabled,
    borders,
    colors,
    spaces
}: RadioButtonStylerParams): RadioButtonStylerResult => {
    let container: ViewStyle = {
        paddingVertical: spaces.container / 2
    };

    let radioContainer: ViewStyle = {
        backgroundColor: colors.backgroundLight,
        borderWidth: borders.line,
        borderColor: colors.stroke
    };

    let radioIndicator: ViewStyle = {
        backgroundColor: colors.primary
    };

    let titleProps: TitleProps = {
        color: "body",
        style: {
            marginLeft: spaces.content,
            ...titleStyle
        }
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
        radioIndicator.backgroundColor = colors.textGrey;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        radioContainer,
        radioIndicator,
        titleProps,
        container
    };
};
export default radioButtonStyler;
