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
    Portal
} from "react-native-portalize";
import {
    Modalize
} from "react-native-modalize";
import PageContainer from "../pageContainer";
import {
    IOCoreLocale,
    IOCoreTheme
} from "../../core";
import ISelectSheetProps, {
    SelectSheetInitialData,
    SelectSheetRef
} from "./types";
import {
    windowHeight
} from "../../utils";
import TextInput from "../textInput";
import Button from "../button";
import CheckBox from "../checkBox";
import RadioButton from "../radioButton";
import {
    SearchIcon 
} from "../../assets/svg";
import {
    useToast
} from "react-native-toast-notifications";

const SelecetSheet = <T extends SelectSheetInitialData> (
    properties: ISelectSheetProps<T>,
    ref: ForwardedRef<SelectSheetRef>
) => {
    const {
        pageContainerStyle: pageContainerStyleProp,
        childrenStyle: childrenStyleProp,
        modalStyle: modalStyleProp,
        rootStyle: rootStyleProp,
        pageContainerProps,
        isLoadingOKButton,
        setSelectedItems,
        snapPoint = 300,
        isNeedConfirm,
        selectedItems,
        multiSelect,
        autoHeight,
        inputTitle,
        fullScreen,
        maxChoice,
        minChoice,
        children,
        onSearch,
        onChange,
        onPress,
        data,
        onOk,
        ...props
    } = properties;

    const [searchText, setSearchText] = useState("");
    const [renderData, setRenderData] = useState(data);
    const [tempSelectedItems, setTempSelectedItems] = useState(selectedItems);

    const {
        radiuses,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        localize
    } = IOCoreLocale.useContext();

    const Toast = useToast();

    const bottomSheetRef: RefObject<SelectSheetRef> = useRef(null);

    useEffect(() => {
        if(searchText && searchText.length) {
            let newData = JSON.parse(JSON.stringify(data));
            newData = newData.filter((item: T) => item.__title.match(new RegExp(searchText, "gi")));
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

    const _onChange = (item: T) => {
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
        return <View
            style={searchContainerProps}
        >
            <TextInput
                title={inputTitle}
                initialValue={searchText}
                onChangeText={(text) => setSearchText(text)}
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
            onPress={() => {
                setTempSelectedItems([]);
            }}
            variant="outline"
            style={{
                ...clearButtonProps,
                flex: isNeedConfirm ? undefined : 1
            }}
            spreadBehaviour={isNeedConfirm ? "baseline" : "stretch"}
        />;
    };

    const renderConfirm = () => {
        if(!isNeedConfirm) {
            return null;
        }

        return <Button
            title={localize("iocore-select-sheet-ok-button")}
            onPress={() => {
                if(onOk) {
                    onOk(
                        tempSelectedItems,
                        () => bottomSheetRef.current?.close(),
                        () => {
                            setSelectedItems(tempSelectedItems);
                        },
                        data
                    );
                } else {
                    setSelectedItems(tempSelectedItems);
                }
            }}
            loading={isLoadingOKButton}
            size="medium"
            variant="filled"
            style={okButtonProps}
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
        item: T,
        index: number;
    }) => {
        const isSelected = tempSelectedItems.findIndex((c_item) => c_item.key === item.__key) !== -1;

        if(multiSelect) {
            return <CheckBox
                key={`select-box-item-${index}`}
                title={item.__title}
                isSelected={isSelected}
                onChange={() => {
                    _onChange(item);
                }}
            />;
        }

        return <RadioButton
            key={`select-box-item-${index}`}
            title={item.__title}
            isSelected={isSelected}
            onChange={() => {
                _onChange(item);
            }}
        />;
    };

    const renderContent = () => {
        return <FlatList
            style={stylesheet.selectItemContainer}
            ListHeaderComponent={renderSearch()}
            data={renderData}
            renderItem={renderItem}
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
                {renderContent()}
                {renderActions()}
            </PageContainer>
        </Modalize>
    </Portal>;
};
export default forwardRef(SelecetSheet);
