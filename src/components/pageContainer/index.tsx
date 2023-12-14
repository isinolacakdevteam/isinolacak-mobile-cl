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
    children,
    style
}) => {
    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    return <ScrollView
        style={[
            stylesheet.container,
            {
                backgroundColor: colors.layer1
            },
            style
        ]}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
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
    style
}) => {
    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    return <View
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

const PageContainer = ({
    scrollable = true,
    children,
    ...props
}: IPageContainerProps) => {
    return scrollable ? <RenderWithScroll {...props} /> : <RenderWithoutScroll {...props} />;
};
export default PageContainer;
