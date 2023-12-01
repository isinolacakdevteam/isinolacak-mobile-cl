import {
    StyleSheet
} from "react-native";
import {
    SelectSheetStylerParams,
    SelectSheetStylerResult
} from "./types";
import {
    ViewStyle
} from "react-native";

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

const selectSheetStyler = ({
    pageContainerStyleProp,
    childrenStyleProp,
    modalStyleProp,
    rootStyleProp,
    fullScreen,
    autoHeight,
    radiuses,
    spaces
}: SelectSheetStylerParams): SelectSheetStylerResult => {
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
        childrenStyle.borderTopLeftRadius = 0;
        childrenStyle.borderTopRightRadius = 0;

        modalStyle.borderTopLeftRadius = 0;
        modalStyle.borderTopRightRadius = 0;
        modalStyle.minHeight = "100%";

        rootStyle.borderTopLeftRadius = 0;
        rootStyle.borderTopRightRadius = 0;

        pageContainerStyle.borderTopLeftRadius = 0;
        pageContainerStyle.borderTopRightRadius = 0;
    }

    return {
        contentContainerStyle,
        pageContainerStyle,
        childrenStyle,
        modalStyle,
        rootStyle
    };
};
export default selectSheetStyler;
