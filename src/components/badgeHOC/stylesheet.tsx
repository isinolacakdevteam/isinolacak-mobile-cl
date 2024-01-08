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
        position: "relative",
    },
    badgeContainer: {
        position: "absolute",
        justifyContent: "center",
        zIndex: 99
    },
    count: {
        textAlign: "center"
    }
});

const badgeHOCStyler = ({
    spreadBehaviour,
    borderColor,
    location,
    radiuses,
    borders,
    colors,
    count,
    spaces,
    color,
    size
}: BadgeHOCStylerParams): BadgeHOCStylerResult => {
    
    let container: ViewStyle = {
        paddingVertical: spaces.container / 2
    };

    let badgeContainer: ViewStyle = {
        backgroundColor: colors.primary,
        borderRadius: radiuses.hard * 3,
        right: spaces.container * -1,
        borderWidth: borders.line,
        borderColor: colors.white,
        paddingHorizontal: 0,
        top: (size / 5) * -1,
        minWidth: size,
        height: size,
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

    if(location) {
        if(location.right) {
            badgeContainer.right= location.right;
        }
        if(location.left) {
            badgeContainer.left= location.left;
        }
        if(location.top) {
            badgeContainer.top= location.top;
        }
        if(location.bottom) {
            badgeContainer.bottom= location.bottom;
        }
    }

    return {
        badgeContainer,
        textStyler,
        container
    };
};
export default badgeHOCStyler;
