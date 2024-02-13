import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    DatePickerStylerParams, 
    DatePickerStylerResult,
    TitleProps
} from "./type";

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
        flexDirection: "column"
    },
    customRenderForIcon: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20
    }
});

const datePickerStyler = ({
    radiuses,
    borders,
    colors,
    spaces
}: DatePickerStylerParams): DatePickerStylerResult => {
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

    return {
        container,
        titleProps
    };
};

export default datePickerStyler;
