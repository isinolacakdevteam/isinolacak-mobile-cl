import React, {
    FC
} from "react";
import {
    ActivityIndicator,
    TouchableOpacity,
    TextStyle,
    View
} from "react-native";
import Text from "../text";
import {
    IOCoreTheme 
} from "../../core";
import {
    IButtonProps 
} from "./types";
import buttonStyler, {
    stylesheet
} from "./stylesheet";

const Button: FC<IButtonProps> = ({
    displayBehaviourWhileLoading = "disabled",
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    variant = "filled",
    color = "primary",
    disabled = false,
    size = "medium",
    titleStyle,
    textColor,
    iconColor,
    loading,
    onPress,
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
        spreadBehaviour,
        iconColor,
        textColor,
        disabled,
        radiuses,
        loading,
        borders,
        variant,
        colors,
        color,
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

    const renderIcon = () => {
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
        if(!title) {
            return null;
        }

        let textStyle: TextStyle = {
        };

        if(IconComponentProp || loading) {
            textStyle.marginLeft = spaces.content;
        }

        return <Text
            variant={titleProps.variant}
            color={titleProps.color}
            style={[
                titleStyle,
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
            style,
            container
        ]}
    >
        {renderLoading()}
        {renderIcon()}
        {renderTitle()}
    </TouchableOpacity>;
};
export default Button;
