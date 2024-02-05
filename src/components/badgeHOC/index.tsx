import React, {
    FC
} from "react";
import {
    View
} from "react-native";
import badgeHOCStyler, {
    stylesheet
} from "./stylesheet";
import {
    IBadgeHOCProps
} from "./types";
import {
    IOCoreTheme
} from "../../core";
import Text from "../text";

const BadgeHOC: FC<IBadgeHOCProps> = ({
    spreadBehaviour = "baseline",
    isActive = true,
    borderWidth,
    borderColor,
    size = 20,
    children,
    color,
    count,
    style,
    ...props
}) => {
    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const coordinationToken = (size / 2) * -1;

    const {
        location= {
            top: coordinationToken + (size / 4),
            right: coordinationToken
        }
    } = props;

    const {
        badgeContainer,
        textStyler,
        container
    } = badgeHOCStyler({
        spreadBehaviour,
        borderColor,
        borderWidth,
        radiuses,
        location,
        borders,
        spaces,
        colors,
        count,
        color,
        size
    });

    const renderBadge = () => {
        if(!isActive) {
            return null;
        }

        return <View
            style={badgeContainer}
        >
            {count ? 
                <Text
                    variant="body4-medium"
                    style={textStyler}
                    color="textWhite"
                >
                    {count}
                </Text>
                : null    
            }
        </View>;
    };

    return <View
        style={[
            stylesheet.container,
            container,
            style
        ]}
    >
        {children}
        {renderBadge()}
    </View>;
};
export default BadgeHOC;
