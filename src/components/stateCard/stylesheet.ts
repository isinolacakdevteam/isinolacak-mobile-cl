import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    StateCardStylerParams,
    StateCardStylerResult,
    TitleProps
} from "./types";
import {
    IIOCoreIconPropsType 
} from "../../types";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    titleStyle: {
        justifyContent: "center",
        textAlign: "center"
    },
    iconContainer : {
        justifyContent: "center",
        alignItems: "center",
    }
});

const stateCardStyler = ({
    titleColor,
    IconProp,
    content,
    colors,
    spaces,
    style
}: StateCardStylerParams): StateCardStylerResult => {
    let container: ViewStyle = {
        ...style
    };

    let titleStyler: TitleProps = {
        color: "textDark",
        style: {
            marginBottom: content ? spaces.content : undefined,
            marginTop: IconProp ? spaces.content : undefined
        }
    };

    let iconContainer: ViewStyle = {
        ...styles.iconContainer
    };

    let iconProps: IIOCoreIconPropsType = {
        color: colors.textGrey,
        size: 100
    };

    let actionProps: ViewStyle = {
        marginTop: spaces.content * 2
    };

    if(titleColor) {
        iconProps.color = colors[titleColor];
        titleStyler.color = titleColor;
    }

    return {
        iconContainer,
        titleStyler,
        actionProps,
        iconProps,
        container
    };
};
export default stateCardStyler;
