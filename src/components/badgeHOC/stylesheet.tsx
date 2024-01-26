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
import {
    TextStyle
} from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        position: "relative"
    },
    badgeContainer: {
        justifyContent: "center",
        position: "absolute",
        zIndex: 99
    },
    count: {
        textAlign: "center"
    }
});

const badgeHOCStyler = ({
    spreadBehaviour,
    borderColor,
    borderWidth,
    location,
    radiuses,
    borders,
    colors,
    spaces,
    count,
    color,
    size
}: BadgeHOCStylerParams): BadgeHOCStylerResult => {
    
    let container: ViewStyle = {
    };

    let badgeContainer: ViewStyle = {
        backgroundColor: colors.primary,
        borderRadius: radiuses.hard * 3,
        borderWidth: borders.line,
        borderColor: colors.white,
        paddingHorizontal: 0,
        minWidth: size,
        height: size,
        ...location,
        ...stylesheet.badgeContainer
    };

    let textStyler: TextStyle = {
        ...stylesheet.count
    };

    if(color) {
        badgeContainer.backgroundColor = colors[color];
    }

    if(borderColor) {
        badgeContainer.borderColor = colors[borderColor];
    }

    if(count !== undefined) {
        badgeContainer.paddingHorizontal = spaces.container / 2;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    if(borderWidth) {
        badgeContainer.borderWidth = borderWidth;
    }

    return {
        badgeContainer,
        textStyler,
        container
    };
};
export default badgeHOCStyler;
