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
    }
});

const selectBoxStyler = ({
    radiuses,
    disabled,
    borders,
    colors,
    spaces
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let container: ViewStyle = {
        paddingVertical: spaces.container / 8,
        paddingHorizontal: spaces.container,
        borderRadius: radiuses.half * 1.5,
        backgroundColor: colors.white,
        borderColor: colors.stroke,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        color: "primary"
    };

    let contentProps: ContentProps = {
        color: "body",
        style: {
            marginTop: spaces.content / 2
        }
    };

    if(disabled) {
        contentProps.color = "textGrey";
        titleProps.color = "textGrey";
    }

    return {
        contentProps,
        titleProps,
        container
    };
};
export default selectBoxStyler;
