import {
    ViewStyle 
} from "react-native";
import {
    StyleSheet
} from "react-native";
import {
    DialogStylerParams,
    DialogStylerResult 
} from "./types";

export const stylesheet = StyleSheet.create({
    container: {
        alignSelf: "stretch"
    },
    headerContainer: {
        paddingBottom: 0,
        width: "100%"
    },
    content: {
        width: "100%"
    },
    bottomContainer: {
        width: "100%"
    },
    bottomContentContainer: {
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    overlay: {
        justifyContent: "center",
        alignItems: "center"
    },
    overlayTouchableArea: {
        flex: 1
    }
});

const dialogStyler = ({
    radiuses,
    spaces,
    colors
}: DialogStylerParams): DialogStylerResult => {
    let container: ViewStyle = {
        backgroundColor: colors.layer1,
        borderRadius: radiuses.half,
        padding: spaces.container
    };

    let header: ViewStyle = {
        paddingHorizontal: spaces.content / 2,
        paddingTop: spaces.content
    };

    let content: ViewStyle = {
        paddingHorizontal: spaces.content / 2,
        paddingVertical: spaces.content
    };

    let bottom: ViewStyle = {
        paddingHorizontal: spaces.content / 2,
        paddingTop: spaces.content
    };

    let primaryButton: ViewStyle = {
        marginLeft: spaces.content
    };

    return {
        primaryButton,
        container,
        content,
        bottom,
        header
    };
};
export default dialogStyler;
