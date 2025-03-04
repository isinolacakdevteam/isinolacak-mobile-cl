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
    IOCoreLocale,
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
import Button from '../button';

const DateTimePicker: RefForwardingComponent<DateTimePickerRef, IDateTimePickerProps> = ({
    onChange: onChangeProp,
    infoIcon: InfoIconProp,
    initialValue = null,
    isClick = false,
    buttonTitle,
    dateTitle,
    disabled,
    infoText,
    display,
    isError,
    style,
    title,
    mode,
    icon,
    valueStyle,
    buttonContentStyle,
    buttonStyle,
    ...props
}, ref) => {
    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        localize
    } = IOCoreLocale.useContext();

    const {
        infoTextIconColor,
        infoTextContainer,
        infoIconStyler,
        infoTextColor,
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

    const [date, setDate] = useState<Date | null>(initialValue);
    const [showPicker, setShowPicker] = useState(false);

    const iOSDateTimePickerRef = useRef<BottomSheetRef>(null);

    useImperativeHandle(
        ref,
        () => ({
            setState: setDate,
            state: date
        }),
        [date]
    );

    const onPress = () => {
        if (Platform.OS === "ios") {
            iOSDateTimePickerRef.current?.open();
        } else {
            setShowPicker(true);
        }
    };

    const onChange = (selectedDate?: Date) => {
        if (!selectedDate) {
            return;
        }

        setShowPicker(false);
        setDate(selectedDate);

        if (onChangeProp) onChangeProp(selectedDate, formatDate(selectedDate));
    };

    const formatDate = (originalDate: Date | null) => {
        if (!originalDate) return "";

        let currentDate = moment(originalDate).format("DD/MM/YY hh:mm");

        if (mode === "date") {
            currentDate = moment(originalDate).format("DD/MM/YY");
        }

        if (mode === "time") {
            currentDate = moment(originalDate).format('LT');
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
                    style={
                        infoIconStyler
                    }
                >
                    <InfoIconProp />
                </View>
                : <View
                    style={
                        infoIconStyler
                    }
                >
                    <InfoIcon
                        color={infoTextIconColor.color}
                        size={15}
                    />
                </View>
            }
            <Text
                variant="body3-regular"
                color={infoTextColor.color}
            >
                {infoText}
            </Text>
        </View>;
    };

    const renderIcon = () => {
        return <View
            style={[
                stylesheet.customRenderForIcon,
                customIcon,
            ]}>
            {
                icon ? icon : <CalendarIcon
                    color={colors.textGrey}
                    size={24}
                />
            }
        </View>;
    };

    const renderTitle = () => {
        return <Text
            color={titleProps.textColor}
            variant="body2-regular"
            style={titleStyle}
            numberOfLines={1}
        >
            {title}
        </Text>;
    };

    const renderDate = () => {
        if (!dateTitle) {
            return <Text
                color={titleProps.color}
                variant="body2-regular"
                numberOfLines={1}
                style={valueStyle}
            >
                {formattedDate || localize("select-a-date")}
            </Text>;
        }

        return <Text
            color={titleProps.color}
            variant="body2-regular"
            numberOfLines={1}
            style={valueStyle}
        >
            {formattedDate || dateTitle}
        </Text>;
    };

    const renderPicker = () => {
        return <DateTimePickerComponent
            onChange={(_, date) => onChange(date)}
            value={date || new Date()}
            display={display}
            mode={mode}
            {...props}
        />;
    };

    const renderAndroidPicker = () => {
        if (Platform.OS === "ios") {
            return null;
        }

        if (!showPicker) {
            return null;
        }

        return renderPicker();
    };

    const renderIOSPicker = () => {
        if (Platform.OS === "android") {
            return null;
        }

        if (!buttonTitle) {
            buttonTitle = localize("date-time-picker-default-button-title");
        }

        return <BottomSheet
            ref={iOSDateTimePickerRef}
            handlePosition="inside"
            autoHeight={true}
        >
            <View
                style={stylesheet.iosDateTimePicker}
            >
                {renderPicker()}
                <Button
                    spreadBehaviour='free'
                    title={buttonTitle}
                    variant="ghost"
                    onPress={() => {
                        iOSDateTimePickerRef.current?.close();
                        if (onChangeProp && date) {
                            onChangeProp(date, formatDate(date));
                        }
                    }}
                />
            </View>
        </BottomSheet>;
    };

    return <View
        style={[
            stylesheet.mainContainer,
            style
        ]}>
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                stylesheet.container,
                container,
                buttonStyle
            ]}
        >
            <View
                style={[
                    stylesheet.content,
                    buttonContentStyle,
                ]}>
                <View>
                    {title ? renderTitle() : null}
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
