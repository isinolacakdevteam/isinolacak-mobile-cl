import React, {
    useEffect,
    useRef,
    FC 
} from "react";
import {
    TouchableOpacity,
    Animated,
    View
} from "react-native";
import switchStyler, {
    TOGGLE_SIZE,
    stylesheet
} from "./stylesheet";
import Text from "../text";
import {
    IOCoreTheme
} from "../../core/";
import {
    ISwitchProps 
} from "./types";

const Switch: FC<ISwitchProps> = ({
    spreadBehaviour = "stretch",
    isActive = false,
    disabled = false,
    onPress,
    style,
    title
}) => {
    const {
        disabled: designTokensDisabled,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: isActive ? 1 : 0,
            duration: 150,
            useNativeDriver: true
        }).start();
    }, [isActive, fadeAnim]);

    const {
        switchContainer,
        titleProps,
        indicator,
        container
    } = switchStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        disabled,
        isActive,
        colors,
        spaces,
        title
    });

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        return <Text
            color={titleProps.color}
            style={[
                titleProps.style
            ]}
        >
            {title}
        </Text>;
    };

    const renderSwitch = () => {
        return <View
            style={[
                stylesheet.switchContainer,
                switchContainer
            ]}
        >
            <Animated.View
                style={[
                    stylesheet.indicator,
                    indicator,
                    {
                        transform: [{
                            translateX: fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, TOGGLE_SIZE]
                            })
                        }]
                    }
                ]}
            />
        </View>;
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            container,
            style
        ]}
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
    >
        {renderTitle()}
        {renderSwitch()}
    </TouchableOpacity>;
};
export default Switch;
