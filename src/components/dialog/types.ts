import {
    ViewStyle 
} from "react-native";
import {
    ButtonDisplayBehaviourWhileLoading 
} from "../../types";

export type DialogStylerParams = {
    radiuses: IOCore.RadiusesTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
};

export type DialogStylerResult = {
    primaryButton: ViewStyle;
    container: ViewStyle;
    content: ViewStyle;
    bottom: ViewStyle;
    header: ViewStyle;
};

export type PortalizedComponentProps = {
    isVisible: boolean
};

export type DialogVariant = "yes-no" | "ok" | "info";

export type DialogButton = {
    title?: string;
    onPress?: () => void;
    displayBehaviourWhileLoading?: ButtonDisplayBehaviourWhileLoading;
    loading?: boolean;
};

interface IDialogProps extends PortalizedComponentProps {
    variant?: DialogVariant;
    title?: string;
    content?: string;
    onOverlayPress?: () => void;
    primaryButtonProps?: DialogButton;
    secondaryButtonProps?: DialogButton;
    headerComponent?: JSX.Element;
    bottomComponent?: JSX.Element;
};
export default IDialogProps;
