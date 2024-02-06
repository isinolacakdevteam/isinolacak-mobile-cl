import React, {
    FC
} from "react";
import {
    ViewStyle,
    View
} from "react-native";
import stateCardStyler, {
    styles 
} from "./stylesheet";
import {
    IStateCardProps
} from "./types";
import {
    IOCoreTheme 
} from "../../core";
import {
    NotificationIcon 
} from "../../assets/svg";
import Button from "../button";
import Text from "../text";

const StateCard: FC<IStateCardProps> = ({
    icon: IconProp = (props) => <NotificationIcon
        {...props}
    />,
    titleColor,
    content,
    action,
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
                variant="body2-regular"
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
            variant="header5-semiBold"
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
