import React, {
    FC 
} from "react";
import {
    TouchableOpacity,
    View
} from "react-native";
import chipStyler, {
    styles
} from "./stylesheet";
import {
    IChipProps 
} from "./types";
import {
    IOCoreTheme 
} from "../../core";
import Text from "../text";
import CloseIcon from "../../../example/assets/svg/closeIcon";

const Chip: FC<IChipProps> = ({
    icon: IconComponentProp,
    color = "primary",
    selected = false,
    closable = false,
    disabled = false,
    title = "Chip",
    size= "medium",
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
        ıconComponentProp,
        closeIconProps,
        titleProps,
        container,
        iconProps,
        closeIcon
    } = chipStyler({
        disabledStyle: designTokensDisabled,
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
            variant="body2-medium"
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

        return <View
            style={
                ıconComponentProp
            }
        >
            <IconComponentProp
                {...iconProps}
            />
        </View>;
    };

    const renderCloseIcon = () => {
        if(IconComponentProp) {
            return null;
        }

        if(!closable) {
            return null;
        }

        return <View
            style={
                closeIcon
            }
        >
            <CloseIcon
                {...closeIconProps}
            />
        </View>;
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
