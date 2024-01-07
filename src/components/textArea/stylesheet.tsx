import {
    StyleSheet,
    ViewStyle,
    TextStyle
} from "react-native";
import {
    TextInputStylerResult,
    TextInputStylerParams,
    TitleProps
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%"
    },
    containerWithFlex: {
        flex: 1
    },
    contentContainer: {
        flexDirection: "column",
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
}: TextInputStylerParams): TextInputStylerResult => {

    let container: ViewStyle = {
        
    };

    let contentContainer: ViewStyle = {
        borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stroke,
        paddingVertical: spaces.container / 2,
        paddingHorizontal: spaces.container,
        minHeight: 180,
        height: 180,
        borderRadius: radiuses.half * 1.5,
        backgroundColor: colors.layer2,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        titleVariant: value?.length || isFocused ? "body2-regular" : "body3-regular",
        color: value?.length || isFocused ? "primary" : "textSecondary",
        style: {
            alignSelf: "flex-start"
        }
    };

    let input: TextStyle = {
        opacity: value ? 1 : 0.5,
        color: colors.textDark,
        ...typography["body2-regular"],
        lineHeight: undefined,
        alignSelf: "flex-start",
        height: 120
    };

    let optionalStyle: ViewStyle = {
        marginHorizontal: spaces.inline
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
        optionalStyle,
        titleProps,
        container,
        input
    };
};
