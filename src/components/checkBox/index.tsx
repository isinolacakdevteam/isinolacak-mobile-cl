import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    View
} from "react-native";
import checkBoxStyler, {
    stylesheet
} from "./stylesheet";
import {
    ICheckBoxProps
} from "./types";
import {
    IOCoreTheme
} from "../../core";
import Text from "../text";
import {
    CheckIcon
} from "../../assets/svg";

const CheckBox: FC<ICheckBoxProps> = ({
    spreadBehaviour = "baseline",
    titleType = "body2-regular",
    onChange: onChangeProp,
    isSelected = false,
    disabled = false,
    titleStyle,
    title,
    style
}) => {
    const {
        disabled: designTokensDisabled,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    } = checkBoxStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        titleStyle,
        isSelected,
        radiuses,
        disabled,
        borders,
        colors,
        spaces
    });

    const onChange = () => {
        if(onChangeProp) onChangeProp(isSelected);
    };

    const renderRadioContainer = () => {
        return <View
            style={[
                stylesheet.checkContainer,
                checkContainer
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
                stylesheet.checkIndicator,
                checkIndicator
            ]}
        >
            <CheckIcon
                size={15}
            />
        </View>;
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
            stylesheet.container,
            container,
            style
        ]}
        disabled={disabled}
        onPress={onChange}
    >
        {renderRadioContainer()}
        {renderTitle()}
    </TouchableOpacity>;
};
export default CheckBox;
