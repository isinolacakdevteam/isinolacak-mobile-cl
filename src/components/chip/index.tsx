import React, {
    FC 
} from "react";
import {
    TouchableOpacity
} from "react-native";
import chipStyler, {
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
    color = "primary",
    selected = false,
    closable = false,
    disabled = false,
    title = "Chip",
    size= "small",
    titleColor,
    onPress,
    style
}) => {
    const {
        disabled: designTokensDisabled,
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
        disabledStyle: designTokensDisabled,
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
            container
        ]}
        disabled={!onPress || disabled}
        onPress={onPress}
    >
        {renderIcon()}
        {renderTitle()}
        {renderCloseIcon()}
    </TouchableOpacity>;
};
export default Chip;
