import React, {
    useImperativeHandle,
    useCallback,
    forwardRef,
    useEffect,
    useState,
    useRef,
    Ref
} from "react";
import {
    TouchableOpacity,
    View
} from "react-native";
import selectBoxStyler, {
    stylesheet
} from "./stylesheet";
import {
    ISelectBoxRefProps,
    ISelectBoxProps,
    SelectedItem
} from "./types";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import {
    ChevronDownIcon,
    InfoIcon
} from "../../assets/svg";
import SelectSheet from "../selectSheet";
import Text from "../text";
import {
    BottomSheetRef
} from "../bottomSheet/types";
import {
    SelectObjectType
} from "../../types";

const SelectBox = <T extends {}>({
    renderIcon: RenderIcon,
    infoIcon: InfoIconProp,
    initialSelectedItems,
    multiSelect = false,
    isLoadingOKButton,
    data: initialData,
    disabled = false,
    bottomSheetProps,
    isClick = false,
    titleExtractor,
    isNeedConfirm,
    flatListProps,
    isHeaderShown,
    keyExtractor,
    isSearchable,
    inputTitle,
    renderItem,
    maxChoice,
    minChoice,
    onSearch,
    onChange,
    infoText,
    onPress,
    isError,
    style,
    title,
    onOk
}: ISelectBoxProps<T>, ref: Ref<ISelectBoxRefProps<T>>) => {
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
        infoTextIconColor,
        infoTextContainer,
        infoIconStyler,
        infoTextColor,
        contentProps,
        titleProps,
        container
    } = selectBoxStyler({
        radiuses,
        disabled,
        infoText,
        isClick,
        borders,
        isError,
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
        if (!initialData || !initialData.length) {
            return;
        }

        const newData: Array<T & {
            __key: string;
            __title: string;
            __originalIndex: number;
        }> = JSON.parse(JSON.stringify(initialData)).map((item: T, index: number) => {
            return {
                ...item,
                __key: keyExtractor ? keyExtractor(item, index) : null,
                __title: titleExtractor(item, index),
                __originalIndex: index
            };
        });

        setData(newData);

        if (initialSelectedItems && initialSelectedItems.length) {
            const preparedDatas = prepareSelectedItems(initialSelectedItems, newData);
            const newSelectedItems: Array<T & SelectedItem> = preparedDatas.selectedItems;

            setSelectedItems(newSelectedItems);
        } else { 
            setSelectedItems([]);
        }
    }, [initialData]);

    useImperativeHandle(
        ref,
        () => ({
            updateSelectedItems
        }),
        [selectedItems, data]
    );

    const prepareSelectedItems = (items, allData) => {
        if (allData && allData.length) {
            const newSI = items.map((item, index) => {
                let originalItem = allData.find(dataItem => {
                    return dataItem.__key === keyExtractor(item, index);
                });

                if (!originalItem) {
                    originalItem = {
                        ...item,
                        __title: titleExtractor(item, index),
                        __key: keyExtractor(item, index),
                        __originalIndex: allData.length
                    };
                    allData.push(originalItem);
                };

                return originalItem;
            });

            return {
                selectedItems: newSI,
                allData
            };
        } else {
            return {
                selectedItems: [],
                allData
            };
        }
    };

    const updateSelectedItems: ISelectBoxRefProps<T>["updateSelectedItems"] = useCallback(({
        getCurrentSelectedItems,
        newSelectedItems
    }) => {
        if (getCurrentSelectedItems) {
            getCurrentSelectedItems(selectedItems, (processedSelectedItems) => {
                setSelectedItems(prepareSelectedItems(processedSelectedItems, data).selectedItems);
            });
        }

        if (newSelectedItems) {
            setSelectedItems(prepareSelectedItems(newSelectedItems, data).selectedItems);
        }
    }, [selectedItems, data]);

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
            numberOfLines={1}
            style={[
            ]} 
        >
            {title}
        </Text>;
    };

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
                </View> : <View
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
                color={infoTextColor.color}
                variant="body3-regular"
            >
                {infoText}
            </Text>
        </View>;
    };

    const renderContent = () => {
        let content = localize("iocore-select-box-no-selection");

        if(selectedItems.length) {
            content = localize("iocore-select-box-n-selected", [
                selectedItems.length
            ]);

            if(selectedItems.length === 1) {
                //@ts-ignore
                content = selectedItems[0].__title;
            }
        }

        if(
            RenderIcon &&
            !renderItem && // TODO: will be check.
            selectedItems.length &&
            (
                !multiSelect ||
                (multiSelect && selectedItems.length === 1)
            )
        ) {
            const selectedIndex = data.findIndex(e => e.__key === selectedItems[0]?.__key);

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

        return <Text
            color={contentProps.color}
            variant="body2-regular"
            numberOfLines={1}
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
            BottomSheetHeaderProps={bottomSheetProps}
            isLoadingOKButton={isLoadingOKButton}
            setSelectedItems={setSelectedItems}
            flatListProps={flatListProps}
            isNeedConfirm={isNeedConfirm}
            selectedItems={selectedItems}
            isHeaderShown={isHeaderShown}
            isSearchable={isSearchable}
            keyExtractor={keyExtractor}
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
            title={title}
            snapPoint={0}
            data={data}
            onOk={onOk}
        />;
    };

    return <View
        style={[
            stylesheet.mainContainer,
            style
        ]}
    >
        <TouchableOpacity
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
        </TouchableOpacity>
        {renderInfoText()}
    </View>;
};
export default forwardRef(SelectBox) as <T extends {}>(
    props: ISelectBoxProps<T> & {
        ref?: Ref<ISelectBoxRefProps<T>>
    }
) => JSX.Element;
