import React, {
    FC 
} from "react";
import {
    ISelectBoxProps 
} from "./types";
import {
    TouchableOpacity 
} from "react-native";
import {
    IOCoreLocale,
    IOCoreTheme 
} from "../../core";
import Text from "../text";
import selectBoxStyler , {
    stylesheet
} from "./stylesheet";
import {
    View 
} from "react-native";
import {
    ChevronDownIcon 
} from "../../assets/svg";


const SelectBox: FC<ISelectBoxProps> = ({
    multiSelect = false,
    isSelected = false,
    disabled = false,
    selectionLength,
    selectionName,
    title
}) => {

    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        container
    } = selectBoxStyler({
        radiuses,
        borders,
        spaces,
        colors
    });

    const {
        localize
    } = IOCoreLocale.useContext();

    const renderTitle = () => {
        return <Text
            color="primary"
            variant="body"
            style={[]}
        >
            {title}
        </Text>;
    };

    const renderSelection = () => {

        if(!isSelected) {

            return <Text
                color="secondary"
                variant="body2"
                style={[]}
            >
                {localize("noSelected")}
            </Text>;
        }

        if(isSelected && multiSelect) {
            return <Text
                color="secondary"
                variant="body2"
                style={[]}
            >
                {selectionLength} {localize("selectionCount")}
            </Text>;
        }

        return <Text
            color="secondary"
            variant="body"
            style={[]}
        >
            {selectionName}
        </Text>;
    };

    const renderIcon = () => {

        return <ChevronDownIcon
            size={20}
            color={colors.gray40}
        />;
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            container
        ]}
        disabled={disabled}
    >
        <View>
            {renderTitle()}
            {renderSelection()}
        </View>
        {renderIcon()}
    </TouchableOpacity>;
};

export default SelectBox;