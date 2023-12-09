import React, {
    FC 
} from "react";
import {
    TouchableOpacity
} from "react-native";
import chipStyler ,{
    styles
} from "./stylesheet";
import {
    IOCoreTheme 
} from "../../core";
import Text from "../text";
import {
    InfoIcon
} from "../../assets/svg/index";
import {
    IChipProps 
} from "./types";


const Chip: FC<IChipProps> = ({
    icon: IconComponentProp,
    titleColor = "textWhite",
    color = "primary",
    selected = false,
    closable = false,
    disabled = false,
    title = "Chip",
    size= "small",
    onPress,
    style
}) => {
    const {
        radiuses,
        borders,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        closeIconProps,
        titleProps,
        container,
        iconProps
    } = chipStyler({
        titleColor,
        selected,
        disabled,
        radiuses,
        borders,
        spaces,
        colors,
        color,
        style,
        size
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
        if(closable) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <IconComponentProp
            {...iconProps}
        />;
    };

    const renderCloseIcon = () => {
        if(IconComponentProp) {
            return null;
        }

        if(!closable) {
            return null;
        }

        return <InfoIcon
            {...closeIconProps}
        />;
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
        {renderCloseIcon()}
    </TouchableOpacity>;
};
export default Chip;