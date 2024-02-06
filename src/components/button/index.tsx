import React, {
    FC
} from "react";
import {
    ActivityIndicator,
    TouchableOpacity,
    TextStyle,
    View
} from "react-native";
import buttonStyler, {
    stylesheet
} from "./stylesheet";
import {
    IButtonProps 
} from "./types";
import {
    IOCoreTheme 
} from "../../core";
import Text from "../text";

const Button: FC<IButtonProps> = ({
    displayBehaviourWhileLoading = "disabled",
    renderTitle: renderTitleProp,
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    iconDirection= "left",
    variant = "filled",
    color = "primary",
    disabled = false,
    size = "medium",
    titleStyle,
    textColor,
    iconColor,
    onPress,
    loading,
    title,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        loadingProps,
        titleProps,
        container,
        iconProps
    } = buttonStyler({
        disabledStyle: designTokensDisabled,
        displayBehaviourWhileLoading,
        icon: IconComponentProp,
        spreadBehaviour,
        iconDirection,
        iconColor,
        textColor,
        disabled,
        radiuses,
        loading,
        borders,
        variant,
        colors,
        spaces,
        color,
        title,
        size
    });

    const renderLoading = () => {
        if(!loading) {
            return null;
        }

        const loadingSize = typography[loadingProps.containerSize]?.fontSize || 16;

        return <View
            style={[
                stylesheet.loadingContainer,
                {
                    height: loadingSize,
                    width: loadingSize
                }
            ]}
        >
            <ActivityIndicator
                color={loadingProps.color}
                size={loadingProps.size}
                style={[
                    stylesheet.loading
                ]}
            />
        </View>;
    };

    const renderIcon = (direction: "left" | "right") => {
        if(direction !== iconDirection) {
            return null;
        }

        if(loading) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderTitle = () => {
        if(!title && !renderTitleProp) {
            return null;
        }

        let textStyle: TextStyle = {
        };

        if(IconComponentProp || loading) {
            textStyle.marginLeft = spaces.content;
        }

        if(renderTitleProp) {
            return renderTitleProp({
                spreadBehaviour: spreadBehaviour,
                variant: titleProps.variant,
                color: titleProps.color,
                titleStyle: [
                    titleStyle,
                    titleProps.style,
                    textStyle,
                ],
                loading: loading,
                size: size
            });
        }

        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={[
                titleStyle,
                titleProps.style,
                textStyle,
            ]}
        >
            {title}
        </Text>;
    };

    return <TouchableOpacity
        onPress={disabled || loading ? undefined : onPress}
        disabled={disabled || loading}
        style={[
            stylesheet.container,
            container,
            style
        ]}
    >
        {renderLoading()}
        {renderIcon("left")}
        {renderTitle()}
        {renderIcon("right")}
    </TouchableOpacity>;
};
export default Button;
