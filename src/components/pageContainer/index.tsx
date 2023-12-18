import React, {
    FC
} from "react";
import {
    ScrollView,
    View
} from "react-native";
import stylesheet from "./stylesheet";
import {
    IOCoreTheme
} from "../../core";
import IPageContainerProps from "./types";

const RenderWithScroll: FC<Omit<IPageContainerProps, "viewRef" | "scrollable">> = ({
    contentContainerStyle,
    scrollViewProps,
    scrollViewRef,
    children,
    style
}) => {
    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    return <ScrollView
        {...scrollViewProps}
        ref={scrollViewRef}
        style={[
            stylesheet.container,
            {
                backgroundColor: colors.layer1
            },
            style
        ]}
        keyboardShouldPersistTaps={scrollViewProps?.keyboardShouldPersistTaps ? scrollViewProps.keyboardShouldPersistTaps : "always"}
        keyboardDismissMode={scrollViewProps?.keyboardDismissMode ? scrollViewProps.keyboardDismissMode : "on-drag"}
        showsHorizontalScrollIndicator={scrollViewProps?.showsHorizontalScrollIndicator ? scrollViewProps.showsHorizontalScrollIndicator : false}
        showsVerticalScrollIndicator={scrollViewProps?.showsVerticalScrollIndicator ? scrollViewProps.showsVerticalScrollIndicator : false}
        contentContainerStyle={{
            paddingVertical: spaces.container / 2,
            paddingHorizontal: spaces.container,
            ...contentContainerStyle
        }}
    >
        {children}
    </ScrollView>;
};

const RenderWithoutScroll: FC<Omit<IPageContainerProps, "contentContainerStyle" | "scrollViewProps" | "scrollViewRef" | "scrollable">> = ({
    children,
    viewRef,
    style,
    ...props
}) => {
    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    return <View
        {...props}
        style={[
            stylesheet.container,
            {
                paddingVertical: spaces.container / 2,
                paddingHorizontal: spaces.container,
                backgroundColor: colors.layer1
            },
            style
        ]}
    >
        {children}
    </View>;
};

const PageContainer: FC<IPageContainerProps> = ({
    scrollable = true,
    ...props
}) => {
    return scrollable ? <RenderWithScroll {...props} /> : <RenderWithoutScroll {...props} />;
};
export default PageContainer;
