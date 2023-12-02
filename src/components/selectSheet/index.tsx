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
    View,
    FlatList
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
        setSelectedItems,
        snapPoint = 300,
        selectedItems,
        multiSelect,
        autoHeight,
        inputTitle,
        fullScreen,
        children,
        onChange,
        onPress,
        data,
        ...props
    } = properties;

    const [searchText, setSearchText] = useState("");
    const [renderData, setRenderData] = useState(data);

    const {
        radiuses,
        spaces
    } = IOCoreTheme.useContext();

    const {
        localize
    } = IOCoreLocale.useContext();

    const bottomSheetRef: RefObject<SelectSheetRef> = useRef(null);

    useEffect(() => {
        if(searchText && searchText.length) {
            let newData = JSON.parse(JSON.stringify(data));
            newData = newData.filter((item: T) => item.__title.match(new RegExp(searchText, "gi")));
            setRenderData(newData);
        } else if(!searchText && data.length) {
            setRenderData(data);
        }
    }, [searchText, data]);

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
        let _selectedItems = JSON.parse(JSON.stringify(selectedItems));

        const isExistsInSelectedData = selectedItems.findIndex(e => e.key === item.__key);

        if(isExistsInSelectedData !== -1) {
            if(multiSelect) {
                _selectedItems.splice(isExistsInSelectedData, 1);
                setSelectedItems(_selectedItems);
            }
        } else {
            if(multiSelect) {
                _selectedItems.push({
                    ...item,
                    key: item.__key,
                    title: item.__title
                });
                setSelectedItems(_selectedItems);
            } else {
                setSelectedItems([
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

    const renderActions = () => {
        return <View
            style={buttonsContainerProps}
        >
            <Button
                title={localize("iocore-select-sheet-clear-button")}
                onPress={() => {}}
                variant="outline"
                style={clearButtonProps}
            />
            <Button
                title={localize("iocore-select-sheet-ok-button")}
                onPress={() => {}}
                size="medium"
                variant="filled"
                style={okButtonProps}
            />
        </View>;
    };

    const renderItem = ({
        item,
        index
    }: {
        item: T,
        index: number;
    }) => {
        const isSelected = selectedItems.findIndex((c_item) => c_item.key === item.__key) !== -1;

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
        spaces
    });

    return <Portal>
        <Modalize
            panGestureEnabled={true}
            tapGestureEnabled={true}
            {...props}
            ref={bottomSheetRef}
            adjustToContentHeight={autoHeight ? true : false}
            closeSnapPointStraightEnabled={true}
            snapPoint={createSnapPoint()}
            closeOnOverlayTap={true}
            childrenStyle={childrenStyle}
            modalTopOffset={fullScreen ? 0 : undefined}
            modalStyle={modalStyle}
            rootStyle={rootStyle}
            scrollViewProps={{
                contentContainerStyle: contentContainerStyle
            }}
        >
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
