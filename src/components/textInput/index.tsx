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
import ITextInputProps from "./types";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import {
    EyeOpenedIcon,
    EyeClosedIcon,
    InfoIcon
} from "../../assets/svg";
import {
    BottomSheetRef
} from "../bottomSheet/types";
import BottomSheet from "../bottomSheet";
import Text from "../text";

const TextInput: FC<ITextInputProps> = ({
    infoSheetIcon: InfoSheetComponentProp,
    icon: IconComponentProp,
    iconDirection = "left",
    hintIcon: HintIconProp,
    renderInfoSheetContent,
    inputRef: inputRefProp,
    isValidateOnChangeText,
    clearEnabled = false,
    onFocus: onFocusProp,
    isInfoSheet = false,
    onBlur: onBlurProp,
    isRequired = false,
    isShowable = false,
    disabled = false,
    size = "medium",
    title = "Title",
    isError = false,
    secureTextEntry,
    onChangeText,
    initialValue,
    iconOnPress,
    onValidate,
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

    const {
        localize
    } = IOCoreLocale.useContext();

    const [value, setValue] = useState(initialValue ? initialValue : "");
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef<NativeTextInput | null>(null);
    const infoSheetRef = useRef<BottomSheetRef>(null);

    const finalTitle = isRequired ? title + " *" : title;
    
    const {
        hintContainerStyle,
        contentContainer,
        hintTextProps,
        optionalStyle,
        hintIconStyle,
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
            secureTextEntry={isShowable ? secureTextEntry && !isShowingPassword : secureTextEntry}
            placeholder={size === "small" ? title : undefined}
            underlineColorAndroid="rgba(255,255,255,0)"
            placeholderTextColor={colors.hideBody}
            textAlignVertical="bottom"
            editable={!disabled}
            
            onFocus={onFocus}
            multiline={false}
            onBlur={onBlur}
            value={value}
            {...props}
            style={[
                stylesheet.input,
                input
            ]}
            ref={(e: NativeTextInput) => {
                inputRef.current = e;
                if(inputRefProp) {
                    inputRefProp(e);
                }
            }}
            onChangeText={(text) => {
                if (text === "") {
                    setValue("");
                    onChangeText && onChangeText("");
                    return;
                }

                if (onValidate) {
                    if (onValidate(text)) {
                        setValue(text);
                        onChangeText && onChangeText(text);
                    }
                } else {
                    setValue(text);
                    onChangeText && onChangeText(text);
                }
            }}
        />;
    };

    const renderTitle = () => {
        if(size === "small") {
            return null;
        }

        return <Text
            color={isError ? "error" : titleProps.color}
            variant={titleProps.titleVariant}
            numberOfLines={1}
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
                        color={isError ? colors.error : colors.greyBase}
                        size={15}
                        style={[
                            hintIconStyle
                        ]}
                    />
            }
            
            <Text
                color={isError ? "error" : hintTextProps.color}
                variant="body3-regular"
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

        return <TouchableOpacity
            onPress={() => {
                infoSheetRef.current?.open();
            }}
        >
            {
                InfoSheetComponentProp ? 
                    <InfoSheetComponentProp/> : 
                    <InfoIcon
                        size={22}
                    />
            }
        </TouchableOpacity>;
    };

    const renderInfoSheet = () => {
        if(!renderInfoSheetContent) {
            return null;
        }

        return <BottomSheet
            handlePosition="inside"
            ref={infoSheetRef}
            pageContainerProps={{
                scrollable: false
            }}
            handleStyle={{
                backgroundColor: colors.textGrey
            }}
            scrollViewProps={{
                scrollEnabled: false
            }}
        >
            {renderInfoSheetContent()}
        </BottomSheet>;
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
                <EyeClosedIcon/>
            </TouchableOpacity>;
        };

        return <TouchableOpacity
            onPress={() => {
                setIsShowingPassword(!isShowingPassword);
            }}
        >
            <EyeOpenedIcon/>
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
