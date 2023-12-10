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

export const stylesheet = StyleSheet.create({
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
    },
    buttonContainerStyle: {
        flexDirection: "row"
    },
    okButtonStyle: {
        flex: 1
    },
    inputStyle: {
    },
    selectItemContainer: {
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
    colors,
    spaces
}: SelectSheetStylerParams): SelectSheetStylerResult => {
    const contentContainerStyle: ViewStyle = {
        ...stylesheet.contentContainerStyle
    };

    const pageContainerStyle = {
        borderTopRightRadius: radiuses.hard,
        borderTopLeftRadius: radiuses.hard,
        paddingVertical: spaces.container,
        backgroundColor: colors.layer1,
        ...pageContainerStyleProp
    };

    const childrenStyle = {
        ...stylesheet.childrenStyle,
        ...childrenStyleProp
    };

    const modalStyle = {
        backgroundColor: "transparent",
        ...stylesheet.modalStyle,
        ...modalStyleProp
    };

    const rootStyle = {
        ...stylesheet.rootStyle,
        ...rootStyleProp
    };

    let searchContainerProps: ViewStyle = {
        marginBottom: spaces.content,
        ...stylesheet.inputStyle
    };

    let buttonsContainerProps: ViewStyle = {
        marginBottom: spaces.content,
        ...stylesheet.buttonContainerStyle
        
    };

    let clearButtonProps: ViewStyle = {
        marginRight: spaces.inline
    };

    let okButtonProps: ViewStyle = {
        ...stylesheet.okButtonStyle
    };

    let inputIconProps: ViewStyle = {
        marginRight: spaces.inline,
        ...stylesheet.inputStyle
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
        buttonsContainerProps,
        searchContainerProps,
        pageContainerStyle,
        clearButtonProps,
        inputIconProps,
        childrenStyle,
        okButtonProps,
        modalStyle,
        rootStyle
    };
};
export default selectSheetStyler;
