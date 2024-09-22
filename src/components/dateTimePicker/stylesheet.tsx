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
    mainContainer: {
        flexDirection: "column",
        alignSelf: "stretch",
        minHeight: 60,
        flex: 1
    },
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
    },
    infoText: {
        flexDirection: "row"
    }
});

const dateTimePickerStyler = ({
    radiuses,
    infoText,
    isError,
    isClick,
    borders,
    colors,
    spaces
}: DateTimePickerStylerParams): DateTimePickerStylerResult => {
    let container: ViewStyle = {
        borderColor: isError ? colors.error : isClick ? colors.primary : colors.stroke,
        paddingVertical: spaces.container / 8,
        paddingHorizontal: spaces.container,
        borderRadius: radiuses.half * 1.5,
        backgroundColor: colors.white,
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

    let infoTextContainer: ViewStyle = {
        paddingLeft: spaces.content
    };

    let infoIconStyler: ViewStyle = {
        marginRight: spaces.inline
    };

    if (infoText) {
        container.marginBottom = spaces.content;
    }

    return {
        infoTextContainer,
        infoIconStyler,
        customIcon,
        titleStyle,
        titleProps,
        container
    };
};
export default dateTimePickerStyler;
