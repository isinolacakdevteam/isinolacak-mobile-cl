import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    SelectBoxStylerParams,
    SelectBoxStylerResult,
    InfoTextColorProps,
    InfoTextIconProps,
    ContentProps,
    TitleProps
} from "./types";

export const stylesheet = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        alignSelf: "stretch",
        minHeight: 60,
        flex: 1
    },
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        minHeight: 60,
        height: 60
    },
    content: {
        justifyContent: "center",
        flexDirection: "column",
        flex: 1
    },
    customRenderForIcon: {
        flexDirection: "row",
        alignItems: "center"
    },
    infoText: {
        flexDirection: "row"
    }
});

const selectBoxStyler = ({
    infoText,
    radiuses,
    disabled,
    isError,
    isClick,
    borders,
    colors,
    spaces
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let container: ViewStyle = {
        borderColor: isError ? colors.error : isClick ? colors.primary : colors.stroke,
        paddingVertical: spaces.container / 8,
        paddingHorizontal: spaces.container,
        borderRadius: radiuses.half * 1.5,
        backgroundColor: colors.white,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: disabled ? "textGrey" : "primary"
    };

    let contentProps: ContentProps = {
        color: disabled ? "textGrey" : "body",
        style: {
            marginTop: spaces.content / 2
        }
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

    return {
        infoTextContainer,
        infoTextIconColor,
        infoIconStyler,
        infoTextColor,
        contentProps,
        titleProps,
        container
    };
};
export default selectBoxStyler;
