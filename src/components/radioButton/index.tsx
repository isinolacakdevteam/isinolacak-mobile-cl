import React, {
    FC
} from "react";
import {
    TouchableOpacity,
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
import {
    View 
} from "react-native";

const RadioButton: FC<IRadioButtonProps> = ({
    spreadBehaviour = "baseline",
    onChange: onChangeProp,
    titleType = "body",
    disabled = false,
    selected = true,
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
        checkedRadio,
        container
    } = radioButtonStyler({
        disabledStyle: designTokensDisabled,
        spreadBehaviour,
        disabled,
        colors
    });

    const renderChecked = () => {
        return <View 
            style={[
                radioContainer
            ]}
        >
            <View
                style={[
                    checkedRadio
                ]}
            > 
            </View>
        </View>;
    };

    const renderUnchecked = () => {
        return <View 
            style={[
                radioContainer
            ]}
        >
        </View>;
    };

    const onChange = () => {
        if(onChangeProp) onChangeProp(selected);
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            style,
            container
        ]}
        disabled={disabled}
        onPress={onChange}
    >
        {selected ? renderChecked() : renderUnchecked()}
        {
            title && <Text
                color={selected ? "primary" : "body"}
                variant={titleType}
                style={{
                    marginLeft: spaces.content
                }}
            >
                {title}
            </Text>
        }
    </TouchableOpacity>;
};
export default RadioButton;