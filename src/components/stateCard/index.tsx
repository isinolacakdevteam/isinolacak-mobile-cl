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
import Button from "../button";
import {
    IOCoreTheme 
} from "../../core";
import {
    IStateCardProps
} from "./types";
import {
    ViewStyle 
} from "react-native";

const StateCard: FC<IStateCardProps> = ({
    icon: IconProp = (props) => <NotificationIcon
        {...props}
    />,
    titleColor,
    action,
    content,
    style,
    title
}) => {
    const {
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        iconContainer,
        titleStyler,
        actionProps,
        iconProps,
        container
    } = stateCardStyler({
        titleColor,
        IconProp,
        content,
        spaces,
        colors,
        style
    });

    const renderIcon = () => {
        if(!IconProp) {
            return null;
        }

        return  <View
            style={[
                iconContainer,
                styles.container
            ]}

        >
            <IconProp
                {...iconProps}
            />
        </View>;
    };

    const renderAction = () => {
        if(!action) {
            return null;
        }

        let actionStyle: ViewStyle[] = [
            actionProps
        ];

        if(action.style) {
            if(Array.isArray(action.style)) {
                action.style.forEach((styleItem: ViewStyle) => {
                    actionStyle.push(styleItem);
                });
            } else {
                actionStyle.push(action.style);
            }
        }

        return <Button
            {...action}
            spreadBehaviour={action.spreadBehaviour ? action.spreadBehaviour : "free"}
            size={action.size ? action.size : "small"}
            style={actionStyle}
        />;
    };

    const renderContent = () => {
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
        {renderIcon()}
        <Text
            variant="header6"
            color={titleStyler.color}
            style={[
                titleStyler.style,
                styles.titleStyle
            ]}
        >
            {title}
        </Text>
        {renderContent()}
        {renderAction()}
    </View>;
};
export default StateCard;
