import {
    ViewStyle
} from "react-native";
import {
    StyleSheet
} from "react-native";
import {
    BottomSheetHeaderStylerResult,
    BottomSheetHeaderStylerProps
} from "./type";

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        maxHeight: 45,
        flex: 1
    },
    content: {
        alignItems: "center",
        flex: 1
    },
    title: {
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center"
    }
});

const bottomSheetHeaderStyler = ({
    borders,
    colors,
    spaces
}: BottomSheetHeaderStylerProps): BottomSheetHeaderStylerResult => {
    let container: ViewStyle = {
        borderBottomWidth: borders.line,
        marginBottom: spaces.container,
        borderColor: colors.stroke
    };

    return {
        container
    };
};
export default bottomSheetHeaderStyler;
