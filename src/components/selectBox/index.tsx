import React, {
    useState,
    useRef
} from "react";
import {
    ISelectBoxProps,
    SelectedItem
} from "./types";
import {
    TouchableOpacity,
    View
} from "react-native";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import Text from "../text";
import selectBoxStyler, {
    stylesheet
} from "./stylesheet";
import {
    ChevronDownIcon
} from "../../assets/svg";
import SelectSheet from "../selectSheet";
import {
    BottomSheetRef
} from "../bottomSheet/types";
import {
    windowHeight 
} from "../../utils";
import {
    SafeAreaView 
} from "react-native";

const SelectBox = <T extends {}>({
    multiSelect = false,
    disabled = false,
    onChange,
    onPress,
    title,
    data
}: ISelectBoxProps<T>) => {
    const selectSheetRef = useRef<BottomSheetRef>(null);

    const {
        radiuses,
        spaces,
        colors
    } = IOCoreTheme.useContext();

    const {
        contentProps,
        titleProps,
        container
    } = selectBoxStyler({
        radiuses,
        disabled,
        spaces,
        colors
    });

    const {
        localize
    } = IOCoreLocale.useContext();

    const [
        selectedItems,
        setSelectedItems
    ] = useState<Array<SelectedItem> | []>([]);

    const renderTitle = () => {
        return <Text
            variant="body"
            color={titleProps.color}
            style={[
            ]} 
        >
            {title}
        </Text>;
    };

    const renderContent = () => {
        let content = localize("iocore-select-box-no-selection");

        if(selectedItems.length) {
            content = localize("iocore-select-box-n-selected", [
                selectedItems.length.toString()
            ]);

            if(selectedItems.length === 1) {
                //@ts-ignore
                content = selectedItems[0].title;
            }
        }

        return <Text
            color= {contentProps.color}
            variant="body"
            style={[
                contentProps.style
            ]}
        >
            {content}
        </Text>;
    };

    const renderIcon = () => {
        return <ChevronDownIcon
            color={colors.gray40}
            size={16}
        />;
    };

    const renderBottomSheet = () => {
        return <SelectSheet
            ref={selectSheetRef}
            fullScreen={false}
            withHandle={false}
            snapPoint={0}
        />;
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            container
        ]}
        onPress={() => {
            if(disabled) {
                return;
            }

            if(!onPress) {
                selectSheetRef.current?.open();
                return;
            }

            onPress(selectedItems);
        }}
        disabled={disabled}
    >
        <View
            style={[
                stylesheet.content
            ]}
        >
            {renderTitle()}
            {renderContent()}
        </View>
        {renderIcon()}
        {renderBottomSheet()}
    </TouchableOpacity>;
};
export default SelectBox;
