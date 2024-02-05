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
    secondaryButtonProps?: DialogButton;
    primaryButtonProps?: DialogButton;
    headerComponent?: JSX.Element;
    bottomComponent?: JSX.Element;
    onOverlayPress?: () => void;
    variant?: DialogVariant;
    content?: string;
    title?: string;
};
export default IDialogProps;
