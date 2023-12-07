import React, {
    useEffect,
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
    uuid 
} from "../../utils";

const SelectBox = <T extends {}>({
    multiSelect = false,
    isLoadingOKButton,
    data: initialData,
    disabled = false,
    titleExtractor,
    isNeedConfirm,
    keyExtractor,
    inputTitle,
    maxChoice,
    minChoice,
    onSearch,
    onChange,
    onPress,
    style,
    title,
    onOk
}: ISelectBoxProps<T>) => {
    const selectSheetRef = useRef<BottomSheetRef>(null);

    const [data, setData] = useState<Array<T & {
        __key: string;
        __title: string;
        __originalIndex: number;
    }>>([]);

    const {
        radiuses,
        borders,
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
        borders,
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

    useEffect(() => {
        if(!initialData || !initialData.length) {
            return;
        }

        setData(JSON.parse(JSON.stringify(initialData)).map((item: T, index: number) => {
            return {
                ...item,
                __key: keyExtractor ? keyExtractor(item, index) : uuid(),
                __title: titleExtractor(item, index),
                __originalIndex: index
            };
        }));
    }, [initialData]);

    const cleanData = () => {
        let _data = JSON.parse(JSON.stringify(data));

        delete _data.__key;
        delete _data.__originalIndex;
        delete _data.__title;

        return _data;
    };

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
                selectedItems.length
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

    const renderSelectSheet = () => {
        return <SelectSheet
            isLoadingOKButton={isLoadingOKButton}
            setSelectedItems={setSelectedItems}
            isNeedConfirm={isNeedConfirm}
            selectedItems={selectedItems}
            multiSelect={multiSelect}
            inputTitle={inputTitle}
            maxChoice={maxChoice}
            minChoice={minChoice}
            ref={selectSheetRef}
            onSearch={onSearch}
            onChange={onChange}
            fullScreen={false}
            withHandle={false}
            snapPoint={0}
            data={data}
            onOk={onOk}
        />;
    };

    return <TouchableOpacity
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
                selectSheetRef.current?.open();
                return;
            }

            onPress(selectedItems, cleanData());
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
        {renderSelectSheet()}
    </TouchableOpacity>;
};
export default SelectBox;
