import React, {
    FC 
} from "react";
import {
    TouchableOpacity
} from "react-native";
import {
    IOCoreTheme 
} from "../../core";
import Text from "../text";
import {
    IStickerProps 
} from "./types";
import stickerStyler,{
    styles
} from "./stylesheet";
import {
    View 
} from "react-native";

const Sticker: FC<IStickerProps> = ({
    title = "Sticker",
    icon: IconComponentProp,
    color = "primary",
    disabled = true,
    titleColor,
    onPress,
    style
}) => {
    const {
        radiuses,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        iconContainerStyle,
        titleProps,
        container,
        iconProps
    } = stickerStyler({
        titleColor,
        radiuses,
        spaces,
        colors,
        color,
        style
    });

    const renderTitle = () => {
        return <Text
            color={titleProps.color}
            variant="body"
            style={[
                titleProps.style
            ]}
        >
            {title}
        </Text>;
    };

    const renderIcon = () => {
        if(!IconComponentProp) {
            return null;
        }

        return <View
            style={[
                iconContainerStyle
            ]}
        >
            <IconComponentProp
                {...iconProps}
            />
        </View>;
    };


    return <TouchableOpacity
        style={[
            styles.container,
            container,
            {
                paddingHorizontal: spaces.container,
                paddingVertical: spaces.content
            }
        ]}
        disabled={!onPress || disabled}
        onPress={!onPress || disabled ? undefined : onPress}
    >
        {renderIcon()}
        {renderTitle()}
    </TouchableOpacity>;
};
export default Sticker;