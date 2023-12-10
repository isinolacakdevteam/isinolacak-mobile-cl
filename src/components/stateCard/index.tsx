import React, {
    FC
} from "react";
import {
    View
} from "react-native";
import stateCardStyler, {
    styles
} from "./stylesheet";
import {
    NotificationIcon 
} from "../../assets/svg";
import Text from "../text";
import {
    IOCoreTheme 
} from "../../core";
import {
    IStateCardProps
} from "./types";

const StateCard: FC<IStateCardProps> = ({
    icon: IconProp = <NotificationIcon
        size={100}
    />,
    content,
    style,
    title
}) => {
    const {
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        container,
        titleStyler
    } = stateCardStyler({
        IconProp,
        content,
        spaces,
        colors,
        style
    });

    const renderFooter = () => {
        if(typeof content === "string") {
            return <Text
                variant="body"
                color="textSecondary"
            >
                {content}
            </Text>;
        }

        return content;
    };

    return <View
        style={[
            container
        ]}
    >
        {IconProp ? IconProp : null}
        <Text
            variant="header6"
            color="textDark"
            style={[
                titleStyler
            ]}
        >
            {title}
        </Text>
        {renderFooter()}
    </View>;
};
export default StateCard;