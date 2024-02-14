import React, {
    FC
} from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import {
    Text
} from 'isinolacak-cl';
import {
    SearchIcon
} from '../../assets/svg';
import IHeaderProps from './type';
import {
    stylesheet 
} from './stylesheet';

const BottomSheetHeader:FC<IHeaderProps> = ({
    titleVariant = "header5-semiBold",
    renderLeft: renderLeftProps,
    titleColor = "textDark",
    isShowGoBack = false,
    renderRightProps,
    goBackFrontColor,
    size = 20,
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
                size={size} 
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
