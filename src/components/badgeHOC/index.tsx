import React, {
    FC
} from "react";
import {
    View
} from "react-native";
import radioButtonStyler, {
    stylesheet
} from "./stylesheet";
import {
    IOCoreTheme
} from "../../core";
import {
    IBadgeHOCProps
} from "./types";
import Text from "../text";

const BadgeHOC: FC<IBadgeHOCProps> = ({
    isActive = true,
    borderColor,
    location,
    children,
    color,
    count,
    style,
}) => {
    const {
        disabled: designTokensDisabled,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        container
    } = radioButtonStyler({
        disabledStyle: designTokensDisabled,
        borders,
        colors,
        spaces
    });

    const renderBadge = () => {
        if(!isActive) {
            return null;
        }

        return <View
            style={{
                backgroundColor: color ? color : colors.primary,
                borderColor: borderColor ? borderColor : colors.white,
                top: spaces.container,
                right: spaces.container,
                position: "absolute",
                borderRadius: radiuses.hard * 3,
                justifyContent: "center",
                borderWidth: borders.line,
                width: 30,
                height: 30,
                ...location
            }}
        >
            {count ? 
                <Text
                    color="textWhite"
                    style={{
                        textAlign: "center"
                    }}
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
