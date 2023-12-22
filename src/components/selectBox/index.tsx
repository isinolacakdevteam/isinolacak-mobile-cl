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
import {
    SelectObjectType
} from "../../types";

const SelectBox = <T extends {}>({
    renderIcon: RenderIcon,
    initialSelectedItems,
    multiSelect = false,
    isLoadingOKButton,
    data: initialData,
    disabled = false,
    titleExtractor,
    isNeedConfirm,
    keyExtractor,
    inputTitle,
    renderItem,
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

    const [data, setData] = useState<Array<T & SelectObjectType>>([]);

    const {
        typography,
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

        const newData: Array<T & {
            __key: string;
            __title: string;
            __originalIndex: number;
        }> = JSON.parse(JSON.stringify(initialData)).map((item: T, index: number) => {
            return {
                ...item,
                __key: keyExtractor ? keyExtractor(item, index) : uuid(),
                __title: titleExtractor(item, index),
                __originalIndex: index
            };
        });

        setData(newData);

        if(initialSelectedItems && initialSelectedItems.length) {
            const newSelectedItems: Array<SelectedItem> = initialSelectedItems.map((item) => {
                const originalItem = newData[item.originalIndex];

                if(!originalItem) {
                    throw new Error("SelectBox -> initialSelectedItems prop is not valid.");
                };

                return {
                    title: originalItem.__title,
                    key: originalItem.__key
                };
            });

            setSelectedItems(newSelectedItems);
        }
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
            variant="body3-regular"
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

        if(
            RenderIcon &&
            !renderItem &&
            selectedItems.length &&
            (
                !multiSelect ||
                (multiSelect && selectedItems.length === 1)
            )
        ) {
            const selectedIndex = data.findIndex(e => e.__key === selectedItems[0]?.key);

            return <View
                style={[
                    stylesheet.customRenderForIcon
                ]}
            >
                {RenderIcon({
                    size: typography["body2-regular"]?.fontSize,
                    selectedItems: selectedItems,
                    color: contentProps.color,
                    item: data[selectedIndex],
                    index: selectedIndex,
                    data: data
                })}
            </View>;
        }

        if(
            renderItem &&
            selectedItems.length &&
            (
                !multiSelect ||
                (multiSelect && selectedItems.length === 1)
            )
        ) {
            const selectedIndex = data.findIndex(e => e.__key === selectedItems[0]?.key);

            return renderItem({
                size: typography["body2-regular"]?.fontSize,
                selectedItems: selectedItems,
                color: contentProps.color,
                item: data[selectedIndex],
                index: selectedIndex,
                data: data
            });
        }

        return <Text
            color= {contentProps.color}
            variant="body2-regular"
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
            initialData={initialData}
            inputTitle={inputTitle}
            renderIcon={RenderIcon}
            renderItem={renderItem}
            maxChoice={maxChoice}
            minChoice={minChoice}
            ref={selectSheetRef}
            onSearch={onSearch}
            onChange={onChange}
            fullScreen={false}
            withHandle={false}
            onPress={onPress}
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
