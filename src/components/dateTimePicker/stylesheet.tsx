import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    DateTimePickerStylerParams, 
    DateTimePickerStylerResult,
    TitleProps
} from "./type";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        minHeight: 60,
        height: 60,
        flex: 1
    },
    content: {
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1
    },
    customRenderForIcon: {
        flexDirection: "row",
        alignItems: "center"
    }
});

const dateTimePickerStyler = ({
    radiuses,
    borders,
    colors,
    spaces
}: DateTimePickerStylerParams): DateTimePickerStylerResult => {
    let container: ViewStyle = {
        paddingVertical: spaces.container / 8,
        paddingHorizontal: spaces.container,
        borderRadius: radiuses.half * 1.5,
        backgroundColor: colors.white,
        borderColor: colors.stroke,
        borderWidth: borders.line
    };

    let titleProps: TitleProps = {
        textColor: "textGrey",
        color: "primary"
    };

    let titleStyle : ViewStyle = {
        marginBottom: spaces.inline
    };

    let customIcon : ViewStyle = {
        marginLeft: spaces.content * 1.5
    };

    return {
        customIcon,
        titleStyle,
        titleProps,
        container
    };
};
export default dateTimePickerStyler;
