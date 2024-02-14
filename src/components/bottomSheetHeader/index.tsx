import React, {
    FC
} from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import {
    stylesheet
} from './stylesheet';
import {
    Text
} from 'isinolacak-cl';
import {
    SearchIcon
} from '../../assets/svg';
import IHeaderProps from './type';

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

    const renderLeft = () => {
        if (renderLeftProps) {
            return renderLeftProps();
        }

        if (!isShowGoBack) {
            return null;
        }

        return <TouchableOpacity onPress={onGoBack}>
            <SearchIcon
                color={goBackFrontColor}
                size={showGoBackSize} 
            />
        </TouchableOpacity>;
    };

    return <View
        style={
            stylesheet.container
        }
    >
        {renderLeft()}
        <View
            style={
                stylesheet.content
            }>
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
