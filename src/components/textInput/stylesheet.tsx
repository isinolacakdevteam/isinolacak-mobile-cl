import {
    StyleSheet,
    ViewStyle,
    TextStyle
} from "react-native";
import {
    TextInputStylerParams,
    TextInputStylerResult,
    TitleProps
} from "./types";
import {
    SIZE_TO_STYLE_MAPPING
} from "./constants";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%"
    },
    containerWithFlex: {
        flex: 1
    },
    contentContainer: {
        flexDirection: "row",
        borderWidth: 1,
        width: "100%",
        flex: 1
    },
    content: {
        justifyContent: "center",
        flexDirection: "column",
        flex: 1
    },
    title: {
        lineHeight: 16
    },
    input: {
        borderColor: "transparent",
        lineHeight: 16,
        padding: 0,
        margin: 0
    },
    clearButton: {
        alignSelf: "center"
    }
});

export const textInputStyler = ({
    disabledStyle,
    typography,
    isFocused,
    disabled,
    radiuses,
    borders,
    colors,
    spaces,
    value,
    size
}: TextInputStylerParams): TextInputStylerResult => {
    let container: ViewStyle = {
        ...SIZE_TO_STYLE_MAPPING[size].container
    };

    let contentContainer: ViewStyle = {
        ...SIZE_TO_STYLE_MAPPING[size].contentContainer,
        borderColor: isFocused ? colors.primary : colors.panel,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: value?.length || isFocused ? "primary" : "gray50",
        style: {
        }
    };

    let input: TextStyle = {
        opacity: value ? 1 : 0.5,
        color: colors.body,
        ...typography.body,
        lineHeight: undefined,
        height: 18
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(isFocused || (value && value.length)) {
        titleProps.style.marginBottom = spaces.inline;
    }

    return {
        contentContainer,
        titleProps,
        container,
        input
    };
};
