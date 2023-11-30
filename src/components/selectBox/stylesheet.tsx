import {
    StyleSheet
} from "react-native";
import {
    SelectBoxStylerParams, SelectBoxStylerResult 
} from "./types";
import {
    ViewStyle 
} from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        paddingHorizontal: 20,
        paddingVertical: 12,
        minHeight: 48,
        height: 48,
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
    colors
}: SelectBoxStylerParams ): SelectBoxStylerResult => {

    let container: ViewStyle = {
        backgroundColor: colors.white,
        borderRadius: radiuses.half
    };

    return {
        container
    };
};
export default selectBoxStyler;