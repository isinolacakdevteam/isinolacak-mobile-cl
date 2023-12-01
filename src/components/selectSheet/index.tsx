import React, {
    RefForwardingComponent,
    useImperativeHandle,
    forwardRef,
    RefObject,
    useRef
} from "react";
import selectSheetStyler from "./stylesheet";
import {
    Portal
} from "react-native-portalize";
import {
    Modalize
} from "react-native-modalize";
import PageContainer from "../pageContainer";
import {
    IOCoreTheme
} from "../../core";
import ISelectSheetProps, {
    SelectSheetRef
} from "./types";
import {
    windowHeight
} from "../../utils";

const SelecetSheet: RefForwardingComponent<SelectSheetRef, ISelectSheetProps> = ({
    pageContainerStyle: pageContainerStyleProp,
    childrenStyle: childrenStyleProp,
    modalStyle: modalStyleProp,
    rootStyle: rootStyleProp,
    pageContainerProps,
    snapPoint = 300,
    autoHeight,
    fullScreen,
    children,
    ...props
}, ref) => {
    const {
        radiuses,
        spaces
    } = IOCoreTheme.useContext();

    const bottomSheetRef: RefObject<SelectSheetRef> = useRef(null);

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
    } = selectSheetStyler({
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
            panGestureEnabled={true}
            tapGestureEnabled={true}
            {...props}
            ref={bottomSheetRef}
            adjustToContentHeight={autoHeight ? true : false}
            snapPoint={createSnapPoint()}
            closeOnOverlayTap={true}
            childrenStyle={childrenStyle}
            modalTopOffset={fullScreen ? 0 : undefined}
            modalStyle={modalStyle}
            rootStyle={rootStyle}
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
export default forwardRef(SelecetSheet);
