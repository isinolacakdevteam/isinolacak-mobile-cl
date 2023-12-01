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
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        paddingVertical: 12,
        minHeight: 60,
        height: 60,
    },
    content: {
        justifyContent: "center",
        flexDirection: "column",
        flex: 1
    },
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 30,
        width: 30
    }
});

const selectBoxStyler = ({
    radiuses,
    disabled,
    colors,
    spaces
}: SelectBoxStylerParams): SelectBoxStylerResult => {
    let container: ViewStyle = {
        backgroundColor: colors.white,
        borderColor: colors.grey25,
        borderRadius: radiuses.half,
        borderWidth: 1
    };

    let titleProps: TitleProps = {
        color: "primary"
    };

    let contentProps: ContentProps = {
        color: "secondary",
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
