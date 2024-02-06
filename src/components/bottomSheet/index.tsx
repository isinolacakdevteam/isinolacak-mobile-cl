import React, {
    RefForwardingComponent,
    useImperativeHandle,
    forwardRef,
    RefObject,
    useRef
} from "react";
import bottomSheetStyler from "./stylesheet";
import IBottomSheetProps, {
    BottomSheetRef
} from "./types";
import {
    windowHeight
} from "../../utils";
import {
    IOCoreTheme
} from "../../core";
import {
    Portal
} from "react-native-portalize";
import {
    Modalize
} from "react-native-modalize";
import PageContainer from "../pageContainer";

const BottomSheet: RefForwardingComponent<BottomSheetRef, IBottomSheetProps> = ({
    pageContainerStyle: pageContainerStyleProp,
    childrenStyle: childrenStyleProp,
    modalStyle: modalStyleProp,
    rootStyle: rootStyleProp,
    pageContainerProps,
    snapPoint = 300,
    fullScreen,
    autoHeight,
    children,
    ...props
}, ref) => {
    const {
        radiuses,
        spaces
    } = IOCoreTheme.useContext();

    const bottomSheetRef: RefObject<BottomSheetRef> = useRef(null);

    const open = () => {
        bottomSheetRef.current?.open();
    };

    const close = () => {
        bottomSheetRef.current?.close();
    };

    useImperativeHandle(
        ref,
        () => ({
            close,
            open
        }),
        []
    );

    const createSnapPoint = () => {
        if(autoHeight) {
            return undefined;
        }

        if(fullScreen) {
            return windowHeight;
        }

        return snapPoint;
    };

    const {
        contentContainerStyle,
        pageContainerStyle,
        childrenStyle,
        modalStyle,
        rootStyle
    } = bottomSheetStyler({
        pageContainerStyleProp,
        childrenStyleProp,
        modalStyleProp,
        rootStyleProp,
        fullScreen,
        autoHeight,
        radiuses,
        spaces
    });

    return <Portal>
        <Modalize
            adjustToContentHeight={autoHeight ? true : false}
            modalTopOffset={fullScreen ? 0 : undefined}
            snapPoint={createSnapPoint()}
            childrenStyle={childrenStyle}
            closeOnOverlayTap={true}
            panGestureEnabled={true}
            tapGestureEnabled={true}
            modalStyle={modalStyle}
            rootStyle={rootStyle}
            ref={bottomSheetRef}
            {...props}
            scrollViewProps={{
                contentContainerStyle: contentContainerStyle
            }}
        >
            <PageContainer
                {...pageContainerProps}
                style={pageContainerStyle}
            >
                {children}
            </PageContainer>
        </Modalize>
    </Portal>;
};
export default forwardRef(BottomSheet);
