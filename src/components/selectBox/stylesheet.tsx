import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    SelectBoxStylerParams,
    SelectBoxStylerResult,
    ContentProps,
    TitleProps
} from "./types";

export const stylesheet = StyleSheet.create({
    mainContainer: {
        boxSizing: "border-box",
        flexDirection: "column",
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

    return {
        infoTextContainer,
        infoIconStyler,
        contentProps,
        titleProps,
        container
    };
};
export default selectBoxStyler;
