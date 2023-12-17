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

const RenderWithScroll: FC<Omit<IPageContainerProps, "scrollable">> = ({
    contentContainerStyle,
    scrollViewProps,
    children,
    style
}) => {
    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    return <ScrollView
        {...scrollViewProps}
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

const RenderWithoutScroll: FC<Omit<IPageContainerProps, "contentContainerStyle" | "scrollable">> = ({
    children,
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
