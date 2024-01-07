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
    IOCoreTheme
} from "../../core";
import ITextAreaProps from "./types";

const TextArea: FC<ITextAreaProps> = ({
    placeholder= "Placeholder",
    clearEnabled = false,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isTextLimit= false,
    isRequired = false,
    disabled = false,
    title = "Title",
    isError = false,
    initialValue,
    onChangeText,
    textLimit = 0,
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

    /*
    const {
        localize
    } = IOCoreLocale.useContext();
    */

    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? initialValue : "");

    const inputRef = useRef<NativeTextInput>(null);

    const finalTitle = isRequired ? title + " *" : title;

    // let secureTextEntry = props.secureTextEntry;

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
            {...props}
            placeholder={placeholder ? placeholder : undefined}
            value={value}
            multiline={true}
            onChangeText={e => {
                if(onChangeText) onChangeText(e);
                setValue(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={inputRef}
            maxLength={textLimit ? textLimit : undefined}
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
