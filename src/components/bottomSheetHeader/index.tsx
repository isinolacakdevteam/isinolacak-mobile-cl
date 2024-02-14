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
    titleColor = "textDark",
    isShowGoBack = false,
    renderRight = null,
    goBackFrontColor,
    renderLeft,
    size = 20,
    onGoBack,
    title
}: IHeaderProps) => {

    const renderLeftContent = () => {
        if (renderLeft) {
            return renderLeft;
        } else if (isShowGoBack) {
            return (
                <TouchableOpacity onPress={onGoBack}>
                    <SearchIcon
                        color={goBackFrontColor}
                        size={size} 
                    />
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    };

    return (
        <View
            style={
                stylesheet.container
            }
        >
            {renderLeftContent()}
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
            {renderRight}
        </View>
    );
};

export default BottomSheetHeader;
