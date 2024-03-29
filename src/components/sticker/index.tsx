import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    View
} from "react-native";
import stickerStyler,{
    styles
} from "./stylesheet";
import {
    IStickerProps 
} from "./types";
import {
    IOCoreTheme
} from "../../core";
import Text from "../text";

const Sticker: FC<IStickerProps> = ({
    spreadBehaviour = "baseline",
    icon: IconComponentProp,
    color = "primary",
    disabled = true,
    type = "filled",
    titleColor,
    onPress,
    title,
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
        spreadBehaviour,
        titleColor,
        radiuses,
        spaces,
        colors,
        color,
        style,
        type
    });

    const renderTitle = () => {
        return <Text
            color={titleProps.color}
            variant="body4-medium"
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
            container
        ]}
        disabled={!onPress || disabled}
        onPress={onPress ? onPress : undefined}
    >
        {renderIcon()}
        {renderTitle()}
    </TouchableOpacity>;
};
export default Sticker;
