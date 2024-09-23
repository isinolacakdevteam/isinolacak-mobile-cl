import {
    StyleSheet,
    ViewStyle,
    TextStyle
} from "react-native";
import {
    TextInputStylerResult,
    TextInputStylerParams,
    InfoTextColorProps,
    InfoTextIconProps,
    TitleProps
} from "./types";

export const stylesheet = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        width: "100%"
    },
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
    },
    infoText: {
        flexDirection: "row"
    }
});

export const textInputStyler = ({
    disabledStyle,
    typography,
    isFocused,
    disabled,
    radiuses,
    infoText,
    isError,
    borders,
    colors,
    spaces,
    value
}: TextInputStylerParams): TextInputStylerResult => {

    let container: ViewStyle = {
    };

    let contentContainer: ViewStyle = {
        borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stroke,
        paddingVertical: spaces.container / 2,
        paddingHorizontal: spaces.container,
        borderRadius: radiuses.half * 1.5,
        backgroundColor: colors.layer2,
        borderWidth: borders.line,
        minHeight: 180,
        height: 180,
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

    let infoTextContainer: ViewStyle = {
        paddingLeft: spaces.content
    };

    let infoIconStyler: ViewStyle = {
        marginRight: spaces.inline
    };

    let infoTextIconColor: InfoTextIconProps = {
        color: isError ? colors.error : colors.textGrey
    }

    let infoTextColor: InfoTextColorProps = {
        color: isError ? "error" : "textGrey"
    }

    if (infoText) {
        container.marginBottom = spaces.content;
    }

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
        infoTextContainer,
        infoTextIconColor,
        contentContainer,
        infoIconStyler,
        optionalStyle,
        infoTextColor,
        titleProps,
        container,
        input
    };
};
