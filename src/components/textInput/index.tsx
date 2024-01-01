import React, {
    useState,
    useRef,
    FC
} from "react";
import {
    TextInput as NativeTextInput,
    TouchableOpacity,
    View
} from "react-native";
import {
    textInputStyler,
    stylesheet
} from "./stylesheet";
import Text from "../text";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import ITextInputProps from "./types";
import {
    EyeOpenedIcon,
    EyeClosedIcon,
    InfoIcon
} from "../../assets/svg";
import BottomSheet from "../bottomSheet";
import {
    BottomSheetRef 
} from "../bottomSheet/types";

const TextInput: FC<ITextInputProps> = ({
    icon: IconComponentProp,
    iconDirection = "left",
    hintIcon: HintIconProp,
    clearEnabled = false,
    onFocus: onFocusProp,
    isInfoSheet = false,
    onBlur: onBlurProp,
    isRequired = false,
    isShowable = false,
    infoSheetChildren,
    disabled = false,
    size = "medium",
    title = "Title",
    isError = false,
    infoSheetIcon: InfoSheetComponentProp,
    initialValue,
    iconOnPress,
    onChangeText,
    isOptional,
    hintText,
    style,
    ...props
}) => {
    const {
        disabled: designTokensDisabled,
        typography,
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const  {
        localize
    } = IOCoreLocale.useContext();

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? initialValue : "");
    const [isShowingPassword, setIsShowingPassword] = useState(false);

    const inputRef = useRef<NativeTextInput>(null);
    const infoSheetRef = useRef<BottomSheetRef>(null);

    const finalTitle = isRequired ? "* " + title : title;

    let secureTextEntry = props.secureTextEntry;

    const {
        hintContainerStyle,
        contentContainer,
        optionalStyle,
        hintIconStyle,
        hintTextProps,
        titleProps,
        container,
        input
    } = textInputStyler({
        disabledStyle: designTokensDisabled,
        typography,
        isFocused,
        disabled,
        radiuses,
        isError,
        borders,
        colors,
        spaces,
        value,
        size
    });

    const onFocus = () => {
        setIsFocused(true);
        if(onFocusProp) onFocusProp();
    };

    const onBlur = () => {
        setIsFocused(false);
        if(onBlurProp) onBlurProp();
    };

    const renderNativeInput = () => {
        return <NativeTextInput
            {...props}
            placeholder={size === "small" ? title : undefined}
            value={value}
            multiline={false}
            onChangeText={e => {
                if(onChangeText) onChangeText(e);
                setValue(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={inputRef}
            secureTextEntry={isShowable ? secureTextEntry && isShowingPassword : secureTextEntry}
            underlineColorAndroid="rgba(255,255,255,0)"
            editable={!disabled}
            textAlignVertical="bottom"
            placeholderTextColor={colors.hideBody}
            style={[
                stylesheet.input,
                input
            ]}
        />;
    };

    const renderTitle = () => {
        if(size === "small") {
            return null;
        }

        return <Text
            variant={titleProps.titleVariant}
            numberOfLines={1}
            color={isError ? "error" : titleProps.color}
            style={[
                stylesheet.title,
                titleProps.style
            ]}
        >
            {finalTitle}
        </Text>;
    };

    const renderOptional = () => {
        if(!isOptional) {
            return null;
        }

        return <Text
            variant="body3-regular"
            numberOfLines={1}
            color="textGrey"
            style={[
                optionalStyle
            ]}
        >
            {localize("optional")}
        </Text>;
    };

    const renderHint = () => {
        if(!hintText) {
            return null;
        }

        return <View
            style={[
                stylesheet.hintContainer,
                hintContainerStyle
            ]}
        >
            {
                HintIconProp
                    ?
                    <HintIconProp/> 
                    :
                    <InfoIcon
                        size={15}
                        color={isError ? colors.error : colors.greyBase}
                        style={[
                            hintIconStyle
                        ]}
                    />
            }
            
            <Text
                variant="body3-regular"
                numberOfLines={1}
                color={isError ? "error" : hintTextProps.color}
                style={[
                    stylesheet.hintText,
                    hintTextProps.style
                ]}
            >
                {hintText}
            </Text>
        </View>;
    };

    const renderIcon = (direction: "left" | "right") => {
        if(direction !== iconDirection) {
            return null;
        }

        if(!IconComponentProp) {
            return null;
        }

        return <TouchableOpacity
            onPress={iconOnPress}
            disabled={iconOnPress ? false : true}
        >
            <IconComponentProp/>
        </TouchableOpacity>;
    };

    const renderInfoSheetIcon = () => {
        if(!isInfoSheet) {
            return null;
        }
        if(!infoSheetChildren) {
            return null;
        }

        return <TouchableOpacity
            onPress={() => {
                infoSheetRef.current?.open();
            }}
        >
            {
                InfoSheetComponentProp ? 
                    <InfoSheetComponentProp/> : 
                    <InfoIcon
                        size={15}
                    />
            }
        </TouchableOpacity>;
    };

    const renderInfoSheet = () => {
        if(!infoSheetChildren) {
            return null;
        }

        return <BottomSheet
            ref={infoSheetRef}
            handlePosition="inside"
            pageContainerProps={{
                scrollable: false
            }}
            handleStyle={{
                backgroundColor: colors.textGrey
            }}
            scrollViewProps={{
                scrollEnabled: false
            }}
            children={infoSheetChildren()}
        />;
    };

    const renderSecureIcon = () => {
        if(!isShowable || !secureTextEntry) {
            return null;
        }

        if(!isShowingPassword) {
            return <TouchableOpacity
                onPress={() => {
                    setIsShowingPassword(!isShowingPassword);
                }}
            >
                <EyeOpenedIcon/>
            </TouchableOpacity>;
        };

        return <TouchableOpacity
            onPress={() => {
                setIsShowingPassword(!isShowingPassword);
            }}
        >
            <EyeClosedIcon/>
        </TouchableOpacity>;
    };
 
    return <TouchableOpacity
        onPress={() =>  inputRef.current?.focus()}
        disabled={disabled}
        activeOpacity={1}
        style={[
            stylesheet.container,
            container,
            style
        ]}
    >
        <View
            style={[
                stylesheet.contentContainer,
                contentContainer
            ]}
        >
            {renderIcon("left")}
            <View
                style={stylesheet.content}
            >          
                {renderTitle()}
                {renderNativeInput()}
            </View>
            {renderOptional()}
            {renderIcon("right")}
            {renderInfoSheetIcon()}
            {renderSecureIcon()}
        </View>
        {renderHint()}
        {renderInfoSheet()}
    </TouchableOpacity>;
};
export default TextInput;
