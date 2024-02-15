import {
    ViewStyle
} from "react-native";
import {
    IOCoreIconType
} from "../../types";
interface IBottomSheetHeaderProps {
    titleVariant?: keyof IOCore.TypographyType;
    goBackFrontColor?: keyof IOCore.ColorsType;
    titleColor?: keyof IOCore.ColorsType;
    renderRight?: IOCoreIconType;
    renderLeft?: IOCoreIconType;
    showGoBackSize?: number;
    isShowGoBack?: boolean;
    onGoBack?: () => void;
    title: string;
};
export default IBottomSheetHeaderProps;

export type BottomSheetHeaderStylerProps = {
    borders: IOCore.BordersTokensType;
    spaces: IOCore.SpacesTokensType;
    colors: IOCore.ColorsType;
}

export type BottomSheetHeaderStylerResult = {
    container: ViewStyle;
}

