import React, {
    useState,
    FC,
    useRef
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
import {
    BottomSheetRef 
} from '../bottomSheet/types';

const CustomDatePicker: FC<IDatePickerProps> = ({
    DateTimePickerSheetRef,
    is24Hour = false,
    disabled,
    setDate,
    display,
    style,
    title,
    date,
    mode
}: IDatePickerProps) => {
    const {
        radiuses,
        borders,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        titleProps,
        customIcon,
        titleStyle,
        container
    } = datePickerStyler({
        radiuses,
        disabled,
        borders,
        spaces,
        colors
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    const IOSdatePickerRef = useRef<BottomSheetRef>(null);

    const onSelectBoxPress = () => {
        if(Platform.OS === "ios") {
            IOSdatePickerRef.current?.open();
        } else {
            setShowDatePicker(true);
        }
    };

    const onDatePickerChange = (
        event: DateTimePickerEvent,
        selectedDate: Date
    ) => {
        const currentDate = selectedDate;
        setShowDatePicker(false);
        setDate(currentDate);
        if(Platform.OS === "ios") {
            IOSdatePickerRef.current?.close();
        } else {
            setShowDatePicker(false);
        }
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
            color={titleProps.color}
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
            {moment(date).format("DD/MM/YY")}
        </Text>;
    };

    const renderAndroidDatePicker = () => {
        if(Platform.OS === "ios") {
            return null;
        }

        if(!showDatePicker) {
            return null;
        }
        
        return <DateTimePicker
            is24Hour={is24Hour}
            display={display}
            value={date}
            mode={mode}
            //@ts-ignore
            onChange={onDatePickerChange} //TODO: Type issue will fix
        />;
    };

    const renderIOSDatePicker = () => {
        if(Platform.OS === "android") {
            return null;
        }

        return <BottomSheet
            ref={IOSdatePickerRef}
            handlePosition="inside"
            autoHeight={true}
        >
            <DateTimePicker
                is24Hour={is24Hour}
                display={display}
                value={date}
                mode={mode}
                //@ts-ignore
                onChange={onDatePickerChange} //TODO: Type issue will fix
            />
        </BottomSheet>;
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            container,
            style
        ]}
        onPress={onSelectBoxPress}
        disabled={disabled}
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
        {renderAndroidDatePicker()}
        {renderIOSDatePicker()}
    </TouchableOpacity>;
};
export default CustomDatePicker;
