import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    StateCardStylerParams, StateCardStylerResult, TitleProps 
} from "./types";
export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});

const stateCardStyler = ({
    IconProp,
    content,
    spaces,
    style
}: StateCardStylerParams): StateCardStylerResult => {
    let container: ViewStyle = {
        ...style,
    };

    let titleStyler: TitleProps = {
        color: "textSecondary",
        style: {
            marginBottom: content ? spaces.content : undefined,
            marginTop: IconProp ? spaces.content : undefined
        }
    };

    return {
        container,
        titleStyler,
    };
};
export default stateCardStyler;