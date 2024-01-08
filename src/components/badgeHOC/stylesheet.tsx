import {
    StyleSheet
} from "react-native";
import {
    BadgeHOCStylerParams,
    BadgeHOCStylerResult
} from "./types";
import {
    ViewStyle 
} from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        position: "relative",
    }
});

const badgeHOCStyler = ({
    disabledStyle,
    borders,
    colors,
    spaces
}: BadgeHOCStylerParams): BadgeHOCStylerResult => {
    
    let container: ViewStyle = {
        paddingVertical: spaces.container / 2
    };

    return {
        container
    };
};
export default badgeHOCStyler;
