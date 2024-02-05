import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View
} from "react-native";
import dialogStyler, {
    stylesheet
} from "./stylesheet";
import IDialogProps from "./types";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import Button from "../button";
import Text from "../text";
import {
    Portal
} from "react-native-portalize";

const Dialog: FC<IDialogProps> = ({
    secondaryButtonProps,
    primaryButtonProps,
    isVisible = false,
    headerComponent,
    bottomComponent,
    onOverlayPress,
    children,
    variant,
    content,
    title
}) => {
    const {
        radiuses,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        localize
    } = IOCoreLocale.useContext();

    const {
        primaryButton: primaryButtonStyle,
        content: contentStyle,
        container,
        bottom,
        header
    } = dialogStyler({
        radiuses,
        spaces,
        colors
    });

    const renderHeader = () => {
        return <View
            style={[
                stylesheet.headerContainer,
                header
            ]}
        >
            {headerComponent || <Text
                variant="header5-regular"
            >
                {title}
            </Text>}
        </View>;
    };

    const renderBottom = () => {
        if(variant === "info") {
            return null;
        }

        return <View
            style={[
                stylesheet.bottomContainer,
                bottom
            ]}
        >
            {bottomComponent || <View
                style={stylesheet.bottomContentContainer}
            >
                {secondaryButton()}
                {primaryButton()}
            </View>}
        </View>;
    };

    const secondaryButton = () => {
        if(variant !== "yes-no") {
            return null;
        }

        return <Button
            title={secondaryButtonProps?.title || localize("IOCoreDefaultDialogSecondaryButtonTitle")}
            loading={secondaryButtonProps?.loading}
            textColor="body"
            color="layer2"
            onPress={() => {
                if(secondaryButtonProps?.onPress) secondaryButtonProps.onPress();
            }}
        />;
    };

    const primaryButton = () => {
        return <Button
            title={primaryButtonProps?.title || localize("IOCoreDefaultDialogPrimaryButtonTitle")}
            loading={primaryButtonProps?.loading}
            onPress={() => {
                if(primaryButtonProps?.onPress) primaryButtonProps?.onPress();
            }}
            displayBehaviourWhileLoading={primaryButtonProps?.displayBehaviourWhileLoading}
            style={primaryButtonStyle}
        />;
    };

    if(!isVisible) {
        return null;
    }

    return <Portal>
        <View
            style={[
                stylesheet.overlay,
                StyleSheet.absoluteFill,
                {
                    backgroundColor: colors.modalBackground,
                    padding: spaces.container
                }
            ]}
        >
            <TouchableOpacity
                style={[
                    StyleSheet.absoluteFill
                ]}
                onPress={() => {
                    if(onOverlayPress) onOverlayPress();
                }}
            >
                <View style={stylesheet.overlayTouchableArea}/>
            </TouchableOpacity>
            <View
                style={[
                    stylesheet.container,
                    container
                ]}
            >
                {renderHeader()}
                <View
                    style={[
                        stylesheet.content,
                        contentStyle
                    ]}
                >
                    {children || <Text>
                        {content}
                    </Text>}
                </View>
                {renderBottom()}
            </View>
        </View>
    </Portal>;
};
export default Dialog;
