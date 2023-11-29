import {
    StyleSheet
} from "react-native";
import {
    RadioButtonStylerParams, 
    RadioButtonStylerResult 
} from "./types";
import {
    ViewStyle 
} from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    }
});

const radioButtonStyler = ({
    spreadBehaviour,
    disabledStyle,
    disabled,
    colors
}: RadioButtonStylerParams): RadioButtonStylerResult => {

    let container: ViewStyle = {
    };

    let checkedRadio: ViewStyle = {
        height: 15,
        width: 15,
        backgroundColor: disabled ?  colors.textGrey : colors.backgroundLight,
        borderRadius: 15
    };

    let radioContainer: ViewStyle = {
        height: 25,
        width: 25,
        backgroundColor: disabled ?  colors.black50 : colors.backgroundLight,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    };

    if(disabled) {
        container = {
            ...container,
            ...disabledStyle
        };
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        container,
        checkedRadio,
        radioContainer
    };
};

export default radioButtonStyler;