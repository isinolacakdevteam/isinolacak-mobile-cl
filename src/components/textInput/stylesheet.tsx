import {
    StyleSheet,
    ViewStyle,
    TextStyle
} from "react-native";
import {
    TextInputStylerResult,
    TextInputStylerParams,
    HintTextProps,
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
        justifyContent:"center",
        alignItems: "center",
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
    hintContainer: {
        flexDirection: "row"
    },
    hintText: {
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
    isError,
    borders,
    colors,
    spaces,
    value,
    size
}: TextInputStylerParams): TextInputStylerResult => {
    const sizeToStyleMapping = SIZE_TO_STYLE_MAPPING(spaces)[size];

    let container: ViewStyle = {
        ...sizeToStyleMapping.container
    };

    let contentContainer: ViewStyle = {
        borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stroke,
        ...sizeToStyleMapping.contentContainer,
        backgroundColor: colors.panel,
        borderRadius: radiuses.half,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: value?.length || isFocused ? "primary" : "gray50",
        style: {
        }
    };

    let hintTextProps: HintTextProps = { 
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

    let optionalStyle: ViewStyle = {
        marginHorizontal: spaces.inline
    };

    let hintContainerStyle: ViewStyle = {
        marginTop: spaces.content
    };

    let hintIconStyle: ViewStyle = {
        marginRight: spaces.inline
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

    if(size !== "small" && !isFocused && !value.length) {
        input.marginBottom = 0;
        input.height = 0;
    }

    return {
        hintContainerStyle,
        contentContainer,
        optionalStyle,
        hintIconStyle,
        hintTextProps,
        titleProps,
        container,
        input
    };
};
