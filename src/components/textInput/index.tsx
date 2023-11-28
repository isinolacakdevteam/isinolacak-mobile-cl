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
    stylesheet,
    textInputStyler
} from "./stylesheet";
import Text from "../text";
import {
    IOCoreTheme,
    IOCoreLocale
} from "../../core";
import ITextInputProps from "./types";
import {
    InfoIcon 
} from "../../assets/svg";

const TextInput: FC<ITextInputProps> = ({
    icon: IconComponentProp,
    iconDirection = "left",
    hintIcon: HintIconProp,
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isRequired = false,
    disabled = false,
    size = "medium",
    title = "Title",
    isError = false,
    onChangeText,
    initialValue,
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

    const inputRef = useRef<NativeTextInput>(null);

    const finalTitle = isRequired ? "* " + title : title;

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
            variant="header7"
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
            variant="body"
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
                variant="body"
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

        return <IconComponentProp/>;
    };

    return <TouchableOpacity
        onPress={() => inputRef.current?.focus()}
        disabled={disabled}
        activeOpacity={1}
        style={[
            style,
            stylesheet.container,
            container
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
        </View>
        {renderHint()}
    </TouchableOpacity>;
};
export default TextInput;
