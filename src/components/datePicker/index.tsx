import React, {
    useState,
    FC
} from 'react';
import {
    TouchableOpacity,
    Platform,
    View
} from 'react-native';
import datePickerStyler, {
    stylesheet
} from './stylesheet';
import {
    IDatePickerProps
} from './type';
import {
    CalendarIcon
} from '../../assets/svg';
import {
    IOCoreTheme
} from '../../core';
import DateTimePicker, {
    DateTimePickerEvent
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import BottomSheet from '../bottomSheet';
import Text from '../text';

const CustomDatePicker: FC<IDatePickerProps> = ({
    DateTimePickerSheetRef,
    is24Hour = false,
    handlePosition,
    autoHeight,
    disabled,
    display,
    onPress,
    style,
    title,
    value,
    mode,
    size
}: IDatePickerProps) => {
    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();
    const {
        titleProps,
        container
    } = datePickerStyler({
        radiuses,
        disabled,
        borders,
        spaces,
        colors
    });

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));

    const onSelectBoxPress = () => {
        setShowDatePicker(true);
        if (Platform.OS === 'ios') {
            DateTimePickerSheetRef.current?.open();
        }
    };

    const onDatePickerChange = (
        event: DateTimePickerEvent,
        selectedDate: Date
    ) => {
        const currentDate = selectedDate;
        setShowDatePicker(false);
        setDate(currentDate);
        DateTimePickerSheetRef.current?.close();
    };

    const renderBottomSheet = () => {
        return (
            <BottomSheet
                ref={DateTimePickerSheetRef}
                handlePosition={handlePosition}
                autoHeight={autoHeight}
            >
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={is24Hour}
                    display={display}
                    //@ts-ignore
                    onChange={onDatePickerChange} //TODO: Type issue will fix
                />
            </BottomSheet>
        );
    };

    const renderIcon = () => {
        return <View                 
            style={[
                stylesheet.customRenderForIcon
            ]}
        >
            <CalendarIcon
                color={colors.textGrey}
                size={size}
            />
        </View>;        
    };

    return (
        <View>
            <TouchableOpacity
                style={[
                    stylesheet.container,
                    container,
                    style
                ]}
                onPress={() => {
                    if(disabled) {
                        return;
                    }

                    if(!onPress) {
                        DateTimePickerSheetRef.current?.open();
                        return;
                    }
        
                    onPress(onSelectBoxPress);
                }}
                disabled={disabled}
            >
                <View                 
                    style={[
                        stylesheet.content,
                    ]}
                > 
                    <Text
                        color={titleProps.color}
                        variant="body2-regular"
                        numberOfLines={1}
                    >
                        {title || moment(date).format('DD/MM/YYYY')}
                    </Text>
                </View>
                {renderIcon()}
            </TouchableOpacity>
            {renderBottomSheet()}
        </View>
    );
};

export default CustomDatePicker;
