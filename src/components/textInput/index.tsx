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
    IOCoreTheme
} from "../../core";
import ITextInputProps from "./types";
import {
    InfoIcon 
} from "../../assets/svg";

const TextInput: FC<ITextInputProps> = ({
    icon: IconComponentProp,
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isRequired = false,
    disabled = false,
    size = "medium",
    title = "Title",
    iconDirection = "left",
    onChangeText,
    initialValue,
    style,
    hint,
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

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? initialValue : "");

    const inputRef = useRef<NativeTextInput>(null);

    const finalTitle = isRequired ? "* " + title : title;

    const {
        contentContainer,
        titleProps,
        container,
        iconProps,
        input
    } = textInputStyler({
        disabledStyle: designTokensDisabled,
        icon: IconComponentProp,
        iconDirection,
        typography,
        isFocused,
        disabled,
        radiuses,
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
            placeholder={size === "small" ? props.placeholder : undefined}
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
                input,
                size !== "small" && !isFocused && !value.length ?
                    {
                        height: 0,
                        marginBottom: 0
                    }
                    :
                    null
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
            color={titleProps.color}
            style={[
                stylesheet.title,
                titleProps.style
            ]}
        >
            {finalTitle}
        </Text>;
    };

    const renderHint = () => {
        if(!hint) {
            return null;
        }
        return <View
            style={stylesheet.hintContainer}
        >
            <InfoIcon
                size={15}
                color={colors.greyBase}
                style={[
                    {
                        marginRight: spaces.inline
                    }
                ]}
            />
            <Text
                variant="body"
                numberOfLines={1}
                color={titleProps.color}
                style={[
                    stylesheet.title,
                    titleProps.style
                ]}
            >
                {hint}
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

        return <IconComponentProp
            {...iconProps}
        />;
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
                contentContainer,
                {
                    marginBottom: hint ? spaces.content / 2 : undefined
                }
            ]}
        >
            {renderIcon("left")}
            <View
                style={stylesheet.content}
            >          
                {renderTitle()}
                {renderNativeInput()}
            </View>
            {renderIcon("right")}
        </View>
        {renderHint()}
    </TouchableOpacity>;
};
export default TextInput;
