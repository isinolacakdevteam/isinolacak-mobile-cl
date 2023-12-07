import {
    StyleSheet
} from "react-native";
import {
    CheckBoxStylerParams, 
    CheckBoxStylerResult, 
    TitleProps
} from "./types";
import {
    ViewStyle 
} from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        height: 24,
        width: 24
    },
    checkIndicator: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        height: 24,
        width: 24
    },
    title: {
        textAlignVertical: "center",
        flex: 1
    }
});

const checkBoxStyler = ({
    spreadBehaviour,
    disabledStyle,
    titleStyle,
    disabled,
    borders,
    colors,
    spaces
}: CheckBoxStylerParams): CheckBoxStylerResult => {
    let container: ViewStyle = {
        paddingVertical: spaces.container / 2
    };

    let checkContainer: ViewStyle = {
        backgroundColor: colors.backgroundLight,
        borderWidth: borders.line,
        borderColor: colors.stroke
    };

    let checkIndicator: ViewStyle = {
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
        checkIndicator.backgroundColor = colors.textGrey;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    };
};
export default checkBoxStyler;
