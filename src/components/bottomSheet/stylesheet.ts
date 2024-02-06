import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    BottomSheetStylerParams,
    BottomSheetStylerResult
} from "./types";

const stylesheet = StyleSheet.create({
    modalStyle: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    rootStyle: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        zIndex: 99
    },
    childrenStyle: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    contentContainerStyle: {
        flex: 1
    }
});

const bottomSheetStyler = ({
    pageContainerStyleProp,
    childrenStyleProp,
    modalStyleProp,
    rootStyleProp,
    fullScreen,
    autoHeight,
    radiuses,
    spaces
}: BottomSheetStylerParams): BottomSheetStylerResult => {
    const contentContainerStyle: ViewStyle = {
        ...stylesheet.contentContainerStyle
    };

    const pageContainerStyle = {
        borderTopRightRadius: radiuses.hard,
        borderTopLeftRadius: radiuses.hard,
        paddingVertical: spaces.container,
        ...pageContainerStyleProp
    };

    const childrenStyle = {
        ...stylesheet.childrenStyle,
        ...childrenStyleProp
    };

    const modalStyle = {
        ...stylesheet.modalStyle,
        ...modalStyleProp
    };

    const rootStyle = {
        ...stylesheet.rootStyle,
        ...rootStyleProp
    };

    if(autoHeight) {
        contentContainerStyle.flex = undefined;
    }

    if(fullScreen) {
        childrenStyle.borderTopRightRadius = 0;
        childrenStyle.borderTopLeftRadius = 0;

        modalStyle.borderTopRightRadius = 0;
        modalStyle.borderTopLeftRadius = 0;
        modalStyle.minHeight = "100%";

        rootStyle.borderTopRightRadius = 0;
        rootStyle.borderTopLeftRadius = 0;

        pageContainerStyle.borderTopRightRadius = 0;
        pageContainerStyle.borderTopLeftRadius = 0;
    }

    return {
        contentContainerStyle,
        pageContainerStyle,
        childrenStyle,
        modalStyle,
        rootStyle
    };
};
export default bottomSheetStyler;
