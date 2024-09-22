import React, {
    RefForwardingComponent,
    useImperativeHandle,
    forwardRef,
    useState,
    useRef
} from 'react';
import {
    TouchableOpacity,
    Platform,
    View
} from 'react-native';
import dateTimePickerStyler, {
    stylesheet
} from './stylesheet';
import IDateTimePickerProps, {
    DateTimePickerRef
} from './type';
import {
    IOCoreTheme
} from '../../core';
import {
    CalendarIcon,
    InfoIcon
} from '../../assets/svg';
import Text from '../text';
import DateTimePickerComponent from "@react-native-community/datetimepicker";
import BottomSheet from '../bottomSheet';
import {
    BottomSheetRef
} from '../bottomSheet/types';
import moment from 'moment';

const DateTimePicker: RefForwardingComponent<DateTimePickerRef, IDateTimePickerProps> = ({
    initialValue = new Date(),
    onChange: onChangeProp,
    infoIcon: InfoIconProp,
    isClick = false,
    disabled,
    infoText,
    display,
    isError,
    style,
    title,
    mode,
    ...props
}, ref) => {
    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        infoTextContainer,
        infoIconStyler,
        titleProps,
        customIcon,
        titleStyle,
        container

    } = dateTimePickerStyler({
        radiuses,
        infoText,
        disabled,
        borders,
        isError,
        isClick,
        spaces,
        colors
    });

    const [showPicker, setShowPicker] = useState(false);
    const [date, setDate] = useState(initialValue);

    const iOSDateTimePickerRef = useRef<BottomSheetRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            setState: setDate,
            state: date
        }),
        []
    );

    const onPress = () => {
        if(Platform.OS === "ios") {
            iOSDateTimePickerRef.current?.open();
        } else {
            setShowPicker(true);
        }
    };

    const onChange = (selectedDate?: Date) => {
        if(!selectedDate) {
            return;
        }

        setShowPicker(false);
        setDate(selectedDate);

        if(onChangeProp) onChangeProp(selectedDate, formatDate(selectedDate));

        if(Platform.OS === "ios") {
            iOSDateTimePickerRef.current?.close();
        } else {
            setShowPicker(false);
        }
    };

    const formatDate = (originalDate: Date) => {
        let currentDate = moment(originalDate).format("DD/MM/YY hh:mm");

        if(mode === "date") {
            currentDate = moment(originalDate).format("DD/MM/YY");
        }

        if(mode === "time") {
            currentDate = moment(originalDate).format("hh:mm");
        }

        return currentDate;
    };

    const formattedDate = formatDate(date);

    const renderInfoText = () => {
        if (!infoText) {
            return null;
        }

        return <View
            style={[
                stylesheet.infoText,
                infoTextContainer
            ]}
        >
            {InfoIconProp ?
                <View
                    style={[
                        infoIconStyler
                    ]}
                >
                    <InfoIconProp />
                </View> : <View
                    style={[
                        infoIconStyler
                    ]}
                >
                    <InfoIcon
                        color={isError ? colors.error : colors.textGrey}
                        size={15}
                    />
                </View>
            }
            <Text
                color={isError ? "error" : "textGrey"}
                variant="body3-regular"
            >
                {infoText}
            </Text>
        </View>;
    };

    const renderIcon = () => {
        return <View                 
            style={[
                stylesheet.customRenderForIcon,
                customIcon
            ]}
        >
            <CalendarIcon
                color={colors.textGrey}
                size={24}
            />
        </View>;        
    };

    const renderTitle = () => {
        return <Text
            color={titleProps.textColor}
            variant="body2-regular"
            numberOfLines={1}
            style={[
                titleStyle
            ]}
        >
            {title}
        </Text>;
    };

    const renderDate = () => {
        return <Text
            color={titleProps.color}
            variant="body2-regular"
            numberOfLines={1}
        >
            {formattedDate}
        </Text>;
    };

    const renderPicker = () => {
        return <DateTimePickerComponent
            {...props}
            onChange={(_, date) => onChange(date)}
            display={display}
            value={date}
            mode={mode}
        />;
    };

    const renderAndroidPicker = () => {
        if(Platform.OS === "ios") {
            return null;
        }

        if(!showPicker) {
            return null;
        }

        return renderPicker();
    };

    const renderIOSPicker = () => {
        if(Platform.OS === "android") {
            return null;
        }

        return <BottomSheet
            ref={iOSDateTimePickerRef}
            handlePosition="inside"
            autoHeight={true}
        >
            {renderPicker()}
        </BottomSheet>;
    };

    return <View
        style={[
            stylesheet.mainContainer,
            style
        ]}
    >
        <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
            stylesheet.container,
            container
        ]}
    >
        <View                 
            style={stylesheet.content}
        > 
            <View>
                {renderTitle()}
                {renderDate()}
            </View>
            {renderIcon()}
        </View>
        {renderAndroidPicker()}
        {renderIOSPicker()}
    </TouchableOpacity>
        {renderInfoText()}
    </View>;
};
export default forwardRef(DateTimePicker);
