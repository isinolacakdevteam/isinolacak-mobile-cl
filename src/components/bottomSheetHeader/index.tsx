import React, {
    FC
} from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import bottomSheetHeaderStyler, {
    stylesheet
} from './stylesheet';
import IBottomSheetHeaderProps from './type';
import {
    IOCoreTheme
} from '../../core';
import {
    ChevronLeftIcon
} from '../../assets/svg';
import Text from '../text';

const BottomSheetHeader: FC<IBottomSheetHeaderProps> = ({
    titleVariant = "header5-semiBold",
    renderRight: RenderRightProps,
    renderLeft: RenderLeftProps,
    titleColor = "textDark",
    isShowGoBack = false,
    showGoBackSize = 20,
    goBackFrontColor,
    onGoBack,
    title
}: IBottomSheetHeaderProps) => {
    const {
        borders,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        container
    } = bottomSheetHeaderStyler({
        borders,
        colors,
        spaces
    });

    const renderLeft = () => {
        if (RenderLeftProps) {
            return <RenderLeftProps/>;
        }

        if (!isShowGoBack) {
            return null;
        }

        return <TouchableOpacity
            onPress={onGoBack}
        >
            <ChevronLeftIcon
                color={goBackFrontColor}
                size={showGoBackSize} 
            />
        </TouchableOpacity>;
    };

    const renderRight = () => {
        if(!RenderRightProps) {
            return null;
        }

        return <RenderRightProps/>;
    };

    return <View
        style={[
            stylesheet.container,
            container
        ]}
    >
        {renderLeft()}
        <View
            style={stylesheet.content}
        >
            <Text
                style={stylesheet.title}
                variant={titleVariant}
                color={titleColor}
            >
                {title}
            </Text>
        </View>
        {renderRight()}
    </View>;
};
export default BottomSheetHeader;
