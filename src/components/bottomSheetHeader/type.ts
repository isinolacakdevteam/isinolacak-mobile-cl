import {
    ViewStyle
} from "react-native";
import {
    IOCoreIconType
} from "../../types";

interface IBottomSheetHeaderProps {
    goBackFrontColor?: keyof IOCore.ColorsType;
    titleVariant?: keyof IOCore.TypographyType;
    titleColor?: keyof IOCore.ColorsType;
    renderRight?: IOCoreIconType;
    renderLeft?: IOCoreIconType;
    showGoBackSize?: number;
    isShowGoBack?: boolean;
    onGoBack?: () => void;
    title: string;
};

export type BottomSheetHeaderStylerProps = {
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
}

export type BottomSheetHeaderStylerResult = {
    container: ViewStyle;
}
export default IBottomSheetHeaderProps;
