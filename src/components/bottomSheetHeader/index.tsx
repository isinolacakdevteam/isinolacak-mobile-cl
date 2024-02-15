import React, {
    FC
} from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import bottomSheetHeaderStyler,{
    stylesheet
} from './stylesheet';
import {
    ChevronLeftIcon
} from '../../assets/svg';
import IHeaderProps from './type';
import {
    IOCoreTheme
} from '../../core';
import Text from '../text';

const BottomSheetHeader:FC<IHeaderProps> = ({
    titleVariant = "header5-semiBold",
    renderLeft: renderLeftProps,
    titleColor = "textDark",
    isShowGoBack = false,
    showGoBackSize = 20,
    renderRightProps,
    goBackFrontColor,
    onGoBack,
    title
}: IHeaderProps) => {

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
        if (renderLeftProps) {
            return renderLeftProps();
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

    return <View
        style={[
            stylesheet.container,
            container
        ]}
    >
        {renderLeft()}
        <View
            style={
                stylesheet.content
            }
        >
            <Text
                variant={titleVariant}
                color={titleColor}
                style={
                    stylesheet.title
                }
            >
                {title}
            </Text>
        </View>
        {renderRightProps}
    </View>;
};

export default BottomSheetHeader;
