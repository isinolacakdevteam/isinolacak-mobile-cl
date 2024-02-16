import React, {
    useImperativeHandle,
    ForwardedRef,
    forwardRef,
    RefObject,
    useEffect,
    useState,
    useRef
} from "react";
import {
    SafeAreaView,
    FlatList,
    View
} from "react-native";
import selectSheetStyler,{
    stylesheet
} from "./stylesheet";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import ISelectSheetProps, {
    SelectSheetRef
} from "./types";
import {
    windowHeight
} from "../../utils";
import {
    SearchIcon 
} from "../../assets/svg";
import PageContainer from "../pageContainer";
import RadioButton from "../radioButton";
import TextInput from "../textInput";
import CheckBox from "../checkBox";
import Button from "../button";
import {
    SelectObjectType
} from "../../types";
import {
    useToast
} from "react-native-toast-notifications";
import {
    Portal
} from "react-native-portalize";
import {
    Modalize
} from "react-native-modalize";
import BottomSheetHeader from "../bottomSheetHeader";
const SelecetSheet = <T, K extends T & SelectObjectType>(
    properties: ISelectSheetProps<T, K>,
    ref: ForwardedRef<SelectSheetRef>
) => {
    const {
        pageContainerStyle: pageContainerStyleProp,
        childrenStyle: childrenStyleProp,
        modalStyle: modalStyleProp,
        rootStyle: rootStyleProp,
        renderItem: RenderItem,
        BottomSheetHeaderProps,
        pageContainerProps,
        isLoadingOKButton,
        setSelectedItems,
        snapPoint = 300,
        isNeedConfirm,
        selectedItems,
        isHeaderShown,
        isSearchable,
        multiSelect,
        initialData,
        autoHeight,
        inputTitle,
        fullScreen,
        renderIcon,
        maxChoice,
        minChoice,
        children,
        onSearch,
        onChange,
        onPress,
        title,
        data,
        onOk,
        ...props
    } = properties;

    const {
        radiuses,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        localize
    } = IOCoreLocale.useContext();

    const [tempSelectedItems, setTempSelectedItems] = useState(selectedItems);
    const [renderData, setRenderData] = useState(data);
    const [searchText, setSearchText] = useState("");

    const Toast = useToast();

    const bottomSheetRef: RefObject<SelectSheetRef> = useRef(null);

    useEffect(() => {
        if(searchText && searchText.length) {
            let newData = JSON.parse(JSON.stringify(data));
            newData = newData.filter((item: K) => item.__title.match(new RegExp(searchText, "gi")));
            setRenderData(newData);
        } else {
            setRenderData(data);
        }
    }, [searchText, data]);

    useEffect(() => {
        if(onSearch) {
            onSearch(searchText);
        }
    }, [searchText]);

    useEffect(() => {
        if(!isNeedConfirm) {
            setSelectedItems(tempSelectedItems);
        }
    }, [tempSelectedItems]);

    const open = () => {
        bottomSheetRef.current?.open();
    };

    const close = () => {
        bottomSheetRef.current?.close();
    };

    useImperativeHandle(
        ref,
        () => ({
            close,
            open
        }),
        []
    );

    const createSnapPoint = () => {
        if(autoHeight) {
            return undefined;
        }

        if(fullScreen) {
            return windowHeight;
        }

        return snapPoint;
    };

    const _onChange = (item: K) => {
        let _selectedItems = JSON.parse(JSON.stringify(tempSelectedItems));

        const isExistsInSelectedData = tempSelectedItems.findIndex(e => e.key === item.__key);

        if(isExistsInSelectedData !== -1) {
            if(multiSelect) {
                if(
                    minChoice !== undefined &&
                    tempSelectedItems.length <= minChoice
                ) {
                    Toast.show(localize("iocore-select-sheet-min-choice", [
                        minChoice
                    ]), {
                        duration: 4000
                    });
                    return;
                }

                _selectedItems.splice(isExistsInSelectedData, 1);
                setTempSelectedItems(_selectedItems);
            }
        } else {
            if(multiSelect) {
                if(
                    maxChoice !== undefined &&
                    tempSelectedItems.length >= maxChoice
                ) {
                    Toast.show(localize("iocore-select-sheet-max-choice", [
                        maxChoice
                    ]), {
                        duration: 4000
                    });
                    return;
                }

                _selectedItems.push({
                    ...item,
                    key: item.__key,
                    title: item.__title
                });
                setTempSelectedItems(_selectedItems);
            } else {
                setTempSelectedItems([
                    {
                        ...item,
                        key: item.__key,
                        title: item.__title
                    }
                ]);
            }
        }
    };

    const renderSearch = () => {
        if(!isSearchable) {
            return null;
        }
        
        return <View
            style={searchContainerProps}
        >
            <TextInput
                onChangeText={(text) => setSearchText(text)}
                initialValue={searchText}
                title={inputTitle}
                size="small"
                icon={() => <SearchIcon 
                    size={25}
                    style={inputIconProps}
                />}
            />
        </View>; 
    };

    const renderClear = () => {
        if(isLoadingOKButton || !multiSelect) {
            return null;
        }

        if(!tempSelectedItems.length) {
            return null;
        }

        return <Button
            title={localize("iocore-select-sheet-clear-button")}
            spreadBehaviour={isNeedConfirm ? "baseline" : "stretch"}
            variant="outline"
            style={{
                ...clearButtonProps,
                flex: isNeedConfirm ? undefined : 1
            }}
            onPress={() => {
                setTempSelectedItems([]);
            }}
        />;
    };

    const renderConfirm = () => {
        if(!isNeedConfirm) {
            return null;
        }

        return <Button
            title={localize("iocore-select-sheet-ok-button")}
            loading={isLoadingOKButton}
            style={okButtonProps}
            variant="filled"
            size="medium"
            onPress={() => {
                if(onOk) {
                    onOk({
                        selectedItems: tempSelectedItems,
                        closeSheet: () => bottomSheetRef.current?.close(),
                        onSuccess: () => {
                            setSelectedItems(tempSelectedItems);
                        },
                        data: data
                    });
                } else {
                    setSelectedItems(tempSelectedItems);
                }
            }}
        />;
    };

    const renderActions = () => {
        return <View
            style={buttonsContainerProps}
        >
            {renderClear()}
            {renderConfirm()}
        </View>;
    };

    const renderItem = ({
        item,
        index
    }: {
        item: K,
        index: number;
    }) => {
        const isSelected = tempSelectedItems.findIndex((c_item) => c_item.key === item.__key) !== -1;

        if(RenderItem) {
            return RenderItem({
                onChange: onChange ? () => onChange(selectedItems, renderData) : undefined,
                onPress: onPress ? () => onPress(selectedItems, renderData) : undefined,
                onOk: onOk ? () => onOk({
                    selectedItems: tempSelectedItems,
                    closeSheet: () => bottomSheetRef.current?.close(),
                    onSuccess: () => {
                        setSelectedItems(tempSelectedItems);
                    },
                    data: data
                }) : undefined,
                selectedItems,
                isSelected,
                index,
                data,
                item
            });
        }

        if(multiSelect) {
            return <CheckBox
                key={`select-box-item-${index}`}
                isSelected={isSelected}
                title={item.__title}
                icon={renderIcon ? ({
                    color,
                    size
                }) => {
                    const RenderIcon = renderIcon({
                        data: renderData,
                        selectedItems,
                        isSelected,
                        index,
                        color,
                        size,
                        item
                    });

                    return <RenderIcon/>;
                } : undefined}
                onChange={() => {
                    _onChange(item);
                }}
            />;
        }

        return <RadioButton
            key={`select-box-item-${index}`}
            isSelected={isSelected}
            title={item.__title}
            icon={renderIcon ? ({
                color,
                size
            }) => {
                const RenderIcon = renderIcon({
                    data: renderData,
                    selectedItems,
                    isSelected,
                    index,
                    color,
                    size,
                    item
                });

                return <RenderIcon/>;
            } : undefined}
            onChange={() => {
                _onChange(item);
            }}
        />;
    };

    const renderContent = () => {
        return <FlatList
            style={stylesheet.selectItemContainer}
            ListHeaderComponent={renderSearch()}
            renderItem={renderItem}
            data={renderData}
        />;
    };


    const renderSelectSheetHeader = () => {
        if(!isHeaderShown) {
            return null;
        }
        
        return <BottomSheetHeader 
            {...BottomSheetHeaderProps}
            title={title} //TODO: This will be checked
        />;
    };


    const {
        buttonsContainerProps,
        contentContainerStyle,
        searchContainerProps,
        pageContainerStyle,
        clearButtonProps,
        inputIconProps,
        childrenStyle,
        okButtonProps,
        modalStyle,
        rootStyle
    } = selectSheetStyler({
        pageContainerStyleProp,
        childrenStyleProp,
        modalStyleProp,
        rootStyleProp,
        fullScreen,
        autoHeight,
        radiuses,
        colors,
        spaces
    });

    return <Portal>
        <Modalize
            adjustToContentHeight={autoHeight ? true : false}
            modalTopOffset={fullScreen ? 0 : undefined}
            closeSnapPointStraightEnabled={true}
            snapPoint={createSnapPoint()}
            childrenStyle={childrenStyle}
            panGestureEnabled={true}
            tapGestureEnabled={true}
            closeOnOverlayTap={true}
            modalStyle={modalStyle}
            rootStyle={rootStyle}
            ref={bottomSheetRef}
            onOpen={() => {
                setTempSelectedItems(selectedItems);
            }}
            onClose={() => {
                if(searchText && searchText.length) {
                    setSearchText("");
                    setRenderData(data);
                }

                setTempSelectedItems([]);
            }}
            scrollViewProps={{
                contentContainerStyle: contentContainerStyle
            }}
            {...props}
        >
            <SafeAreaView/>
            <PageContainer
                {...pageContainerProps}
                style={pageContainerStyle}
                scrollable={false}
            >
                {renderSelectSheetHeader()}
                {renderContent()}
                {renderActions()}
            </PageContainer>
        </Modalize>
    </Portal>;
};
export default forwardRef(SelecetSheet);
