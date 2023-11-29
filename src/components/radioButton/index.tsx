import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    View
} from "react-native";
import radioButtonStyler, {
    stylesheet
} from "./stylesheet";
import {
    IOCoreTheme
} from "../../core";
import Text from "../text";
import {
    IRadioButtonProps
} from "./types";

const RadioButton: FC<IRadioButtonProps> = ({
    spreadBehaviour = "baseline",
    onChange: onChangeProp,
    isSelected = false,
    titleType = "body",
    disabled = false,
    titleStyle,
    title,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        radioContainer,
        radioIndicator,
        titleProps,
        container
    } = radioButtonStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        titleStyle,
        isSelected,
        disabled,
        colors,
        spaces
    });

    const onChange = () => {
        if(onChangeProp) onChangeProp(isSelected);
    };

    const renderRadioContainer = () => {
        return <View
            style={[
                stylesheet.radioContainer,
                radioContainer
            ]}
        >
            {renderIndicator()}
        </View>;
    };

    const renderIndicator = () => {
        if(!isSelected) {
            return null;
        }

        return <View
            style={[
                stylesheet.radioIndicator,
                radioIndicator
            ]}
        />;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        return <Text
            color={titleProps.color}
            variant={titleType}
            style={[
                stylesheet.title,
                titleProps.style
            ]}
        >
            {title}
        </Text>;
    };

    return <TouchableOpacity
        style={[
            style,
            stylesheet.container,
            container
        ]}
        disabled={disabled}
        onPress={onChange}
    >
        {renderRadioContainer()}
        {renderTitle()}
    </TouchableOpacity>;
};
export default RadioButton;
