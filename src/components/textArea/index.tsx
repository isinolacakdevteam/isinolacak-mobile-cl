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
import ITextAreaProps from "./types";
import {
    IOCoreTheme
} from "../../core";
import Text from "../text";

const TextArea: FC<ITextAreaProps> = ({
    clearEnabled = false,
    onFocus: onFocusProp,
    isTextLimit= false,
    isRequired = false,
    onBlur: onBlurProp,
    disabled = false,
    title = "Title",
    isError = false,
    textLimit = 0,
    initialValue,
    onChangeText,
    placeholder,
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

    const [value, setValue] = useState(initialValue ? initialValue : "");
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef<NativeTextInput>(null);

    const finalTitle = isRequired ? title + " *" : title;

    const {
        contentContainer,
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
        value
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
            maxLength={textLimit ? textLimit : undefined}
            underlineColorAndroid="rgba(255,255,255,0)"
            placeholderTextColor={colors.hideBody}
            placeholder={placeholder}
            textAlignVertical="top"
            editable={!disabled}
            onFocus={onFocus}
            multiline={true}
            onBlur={onBlur}
            ref={inputRef}
            value={value}
            {...props}
            style={[
                stylesheet.input,
                input
            ]}
            onChangeText={e => {
                if(onChangeText) onChangeText(e);
                setValue(e);
            }}
        />;
    };

    const renderTitle = () => {
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

    const renderCounter = () => {
        if(!isTextLimit && !textLimit && textLimit < 1) {
            return null;
        } 
        return <Text
            variant="body3-regular"
            color="textSecondary"
            style={{
                alignSelf: "flex-end"
            }}
        >
            {value.length} / {textLimit}
        </Text>;
        
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
            {renderTitle()}
            {renderNativeInput()}
            {renderCounter()}
            
        </View>
        
    </TouchableOpacity>;
};
export default TextArea;
