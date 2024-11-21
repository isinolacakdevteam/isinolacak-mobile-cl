import React, {
    useState,
    useRef,
    useEffect
} from "react";
import {
    TextInput as NativeTextInput,
    SafeAreaView,
    StatusBar,
    Image,
    View
} from 'react-native';
import {
    DateTimePicker,
    PageContainer,
    IOCoreLocale,
    RadioButton,
    IOCoreTheme,
    IOCoreModal,
    TextInput,
    StateCard,
    TextArea,
    CheckBox,
    BadgeHOC,
    Sticker,
    Button,
    Chip,
    Text
} from "isinolacak-mobile-cl";
import stylesheet from "./stylesheet";
import {
    CompositeScreenProps,
    useNavigation
} from "@react-navigation/native";
import {
    InfoIcon
} from "../../../../src/assets/svg";
import BottomSheetHeader from "../../../../src/components/bottomSheetHeader";
import SelectBox from "../../../../src/components/selectBox";

const lightIcon = require("../../../assets/lightlogo.png");
const darkIcon = require("../../../assets/darklogo.png");

const Welcome = () => {
    const navigation = useNavigation<CompositeScreenProps<any, any>["navigation"]>();

    const {
        activeTheme,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        activeLocale,
        localize
    } = IOCoreLocale.useContext();

    const [isSelected, setIsSelected] = useState(false);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [isEndOfData, setIsEndOfData] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [districts, setDistricts] = useState([]);
    const [cities, setCities] = useState([]);
    const [registerInfo, setRegisterInfo] = useState({
        city: {
            localizedText: "",
            key: "",
            _id: "",
        },
        district: {
            localizedText: "",
            key: "",
            _id: "",
        },
    });

    const inputRef = useRef<NativeTextInput | null>(null);

    const onReachEnd = (data: any) => {
        console.error("data", data);
    };

    useEffect(() => {
        loadMoreSectorData();
    },[]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch('https://gw-test.isinolacak.com/staticData/getCities', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const result = await response.json();
                setCities(result.payload);
            } catch (err) {
                console.error(err || 'Something went wrong');
            }
        };
    
        fetchCities();
    }, []);
    
    useEffect(() => {
        if(registerInfo.city._id) {const fetchDataDistricts = async () => {
            try {
                const response = await fetch(`https://gw-test.isinolacak.com/staticData/getDistricts?cityID=${registerInfo.city._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const result = await response.json();
                setDistricts(result.payload);
    
            } catch (err) {
                console.error(err || 'Something went wrong');
            }
        };
    
        fetchDataDistricts();
        }}, [registerInfo.city._id]);

    const onSearchOccupation = (e: string) => {
        const timer = setTimeout(() => {
            if (e && e.length) {
                let params: any = {
                    search: e,
                    page:  1
                };
                loadMoreSectorData(params);
            }
            if(!e.length) {
                fetch(`https://gw-test.isinolacak.com/staticData/getOccupations?language=tr-TR&page="1"`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                    .then((res) => {
                        if (res.status === 200) {
                            return res.json();
                        }
                    })
                    .then((res) => {
                        setPage(1);
                        setSearch("");
                        setData(res);
                    }).catch((err) => {
                    });
            }
        }, 750);
        return () => clearTimeout(timer);
    };

    const loadMoreSectorData = (_data?: any) => {

        let params = `&page=${String(page)}`;

        if(_data) {
            params = `&page=${String(_data.page)}&search=${_data.search}`;
        }

        fetch(`https://gw-test.isinolacak.com/staticData/getOccupations?language=tr-TR${params}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then((res) => {
                if(data.length) {
                    let _getSectors = JSON.parse(JSON.stringify(data));
                    let newSectors = res.filter(newItem => !_getSectors.some(oldItem => oldItem._id === newItem._id));
                    setData([..._getSectors, ...newSectors]);
                } else {
                    setData(res);
                }
                setPage(page + 1);
                setIsLoadMore(false);

                if(res.length === 0 || res.length < 20) {
                    setIsEndOfData(true);
                    return;
                }
    
            }).catch((err) => {
            });
        
    };

    const regexValidation = (text: string) => {
        const regex = /^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/;
        return regex.test(text);
    };

    return <SafeAreaView
        style={{
            backgroundColor: colors.layer1,
            flex: 1
        }}
    >

        <PageContainer
            contentContainerStyle={stylesheet.contentContainer}
        >
            <StatusBar
                barStyle={activeTheme === "dark" ? "light-content" : "dark-content"}
                backgroundColor={colors.layer1}
            />
            <SelectBox
                titleExtractor={(item) => item.localizedText}
                isNeedConfirm={true}
                isHeaderShown={true}
                infoText="dsadsad"
                isError={true}
                initialSelectedItems={data && data.length ? [
                    data[1],
                    data[3]
                ] : undefined}
                bottomSheetProps={{
                    isShowGoBack: true,
                    title: "Time"
                }}
                multiSelect={true}
                inputTitle="Time"
                isSearchable={true}
                onSearch={(e) => {
                    setIsEndOfData(false);
                    setSearch(e);
                    onSearchOccupation(e);
                }}
                keyExtractor={(item) => {
                    return item.key;
                }}
                flatListProps={{
                    onEndReachedThreshold: .5,
                    onEndReached: () => {
                        if(isLoadMore) {
                            return;
                        }
                        setIsLoadMore(true);
                        loadMoreSectorData();
                    },
                    ListEmptyComponent: () => {
                        return <StateCard
                            title="Meslek Bulnumadı"
                            style = {{
                                marginTop: spaces.container * 4
                            }}
                        />;
                    }
                }}
                disabled={false}
                title="Time"
                onOk={({
                    closeSheet,
                    onSuccess
                }) => {
                    closeSheet();
                    onSuccess();
                }}
                data={data}
            />

            <Image
                source={activeTheme === "dark" ? darkIcon : lightIcon}
                resizeMode="contain"
                style={stylesheet.logo}
            />

            <Text
                variant="header3-medium"
                style={{
                    marginBottom: spaces.content
                }}
            >
                {localize("isinolacak-mobile-cl")}
            </Text>
            <Text
                variant="body-regular"
                color="hideBody"
                style={[
                    stylesheet.welcomeText,
                    {
                        marginBottom: spaces.content * 4
                    }
                ]}
            >
                {localize("welcome-description")}
            </Text>

            <View
                style={[
                    stylesheet.toolsContainer,
                    {
                        marginBottom: spaces.content
                    }
                ]}
            >
                <Button
                    spreadBehaviour="free"
                    // color={activeTheme === "dark" ? "constrastBody" : "body"}
                    textColor={"constrastBody"}
                    title={`${localize("active-theme")}: ${activeTheme.charAt(0).toLocaleUpperCase()}${activeTheme.slice(1)}`}
                    style={[
                        stylesheet.toolButtonLeft,
                        {
                            paddingRight: spaces.container / 2,
                            paddingLeft: spaces.container / 2,
                            marginRight: spaces.content / 2
                        }
                    ]}
                    size="small"
                    onPress={() => {
                        // IOCoreTheme.setTheme(activeTheme === "dark" ? "light" : "dark");
                        IOCoreModal.open({
                            type: "dialog",
                            key: "x3d",
                            title: "yyyy",
                            content: "4tegsrx",
                            variant: "yes-no",
                            isVisible: true,
                            onOverlayPress: () => {
                                IOCoreModal.close({
                                    key: "x3d"
                                });
                            }
                        });
                    }}
                />
                <Button
                    spreadBehaviour="free"
                    color="layer2"
                    textColor="body"
                    title={`${localize("active-language")}: ${activeLocale.toLocaleUpperCase()}`}
                    style={[
                        stylesheet.toolButtonRight,
                        {
                            paddingRight: spaces.container / 2,
                            paddingLeft: spaces.container / 2,
                            marginLeft: spaces.content / 2
                        }
                    ]}
                    onPress={() => {
                        IOCoreLocale.switchLocale(activeLocale === "en" ? "tr" : "en");
                    }}
                />
            </View>

            <View
                style={[
                    stylesheet.seperator,
                    {
                        backgroundColor: colors.seperator,
                        marginBottom: spaces.content * 2,
                        marginTop: spaces.content
                    }
                ]}
            />

            <Button
                spreadBehaviour="stretch"
                title="Text"
                color="layer2"
                textColor="body"
                style={{
                    marginBottom: spaces.content
                }}
                onPress={() => {
                    navigation.navigate("Text");
                }}
            />
            <Button
                spreadBehaviour="stretch"
                title="Button"
                color="layer2"
                textColor="body"
                style={{
                    marginBottom: spaces.content
                }}
                onPress={() => {
                    IOCoreTheme.setTheme(activeTheme === "dark" ? "light" : "dark");
                }}
            />
            <BadgeHOC
                isActive={true}
            >
                <Chip
                    onPress={() => {
                        setIsSelected(!isSelected);
                    }}
                    selected={isSelected}
                />
            </BadgeHOC>
            <TextArea
                title="Text Area"
                infoText="DENEME"
                isError={true}
                style={{
                    marginVertical: spaces.content
                }}
            />
            <StateCard
                title="Deneme"
                content="SADASDSA DSAD"
                titleColor="accent"
                action={{
                    onPress: () => {
                        inputRef.current?.focus();
                    },
                    spreadBehaviour: "free",
                    title: "Hi Cnm",
                    size: "small"
                }}
                icon={({
                    color,
                    size
                }) => {
                    return <InfoIcon
                        color={color}
                        size={size}
                    />;
                }}
            />

            <CheckBox
                title="Check"
                isSelected={isSelected}
                onChange={() => setIsSelected(!isSelected)}
            />
            <SelectBox
                //@ts-ignore
                initialSelectedItems={registerInfo.city._id.length ? [registerInfo.city] : []}
                isError={false}
                infoText="cities"
                titleExtractor={(item) => item.localizedText}
                inputTitle={"cities"}
                title={"cities"}
                keyExtractor={(e) => e._id}
                isSearchable={true}
                multiSelect={false}
                onOk={({
                    selectedItems,
                    closeSheet,
                    onSuccess
                }) => {
                    if(selectedItems[0]) {
                        setRegisterInfo((prev) => {
                        //@ts-ignore
                            if(prev.city._id !== selectedItems[0]._id) {
                                setDistricts([]);
                                return {
                                    ...prev,
                                    district: {
                                        localizedText: "",
                                        key: "",
                                        _id: ""
                                    },
                                    city: {
                                    //@ts-ignore //TODO: Will be fix
                                        localizedText: selectedItems[0].localizedText,
                                        //@ts-ignore
                                        key: selectedItems[0].key,
                                        //@ts-ignore
                                        _id: selectedItems[0]._id
                                    }
                                };
                            }
                            return {
                                ...prev,
                                city: {
                                //@ts-ignore //TODO: Will be fix
                                    localizedText: selectedItems[0].localizedText,
                                    //@ts-ignore
                                    key: selectedItems[0].key,
                                    //@ts-ignore
                                    _id: selectedItems[0]._id
                                }
                            };
                        });
                    }
                    closeSheet();
                    onSuccess();
                }}
                isNeedConfirm={true}
                data={cities}
            />
            <SelectBox
                initialSelectedItems={registerInfo.district && registerInfo.district._id && registerInfo.district._id.length ? [registerInfo.district] : []}
                titleExtractor={(item) => item.localizedText}
                keyExtractor={(e) => e._id}
                inputTitle={"districts"}
                infoText="districts"
                title={"districts"}
                isError={false}
                isSearchable={true}
                multiSelect={false}
                onOk={({
                    selectedItems,
                    closeSheet,
                    onSuccess
                }) => {
                    if(selectedItems[0]) {
                        setRegisterInfo({
                            ...registerInfo,
                            district: {
                                //@ts-ignore //TODO: Will be fix
                                localizedText: selectedItems[0].localizedText,
                                //@ts-ignore
                                key: selectedItems[0].key,
                                //@ts-ignore
                                _id: selectedItems[0]._id,
                            }
                        });
                    }
                    closeSheet();
                    onSuccess();
                }}
                isNeedConfirm={true}
                data={districts}
            />
            <TextInput
                onValidate={regexValidation}
            />
            <Chip
                onPress={() => setIsSelected(!isSelected)}
                selected={isSelected}
                closable={true}
                title="deneme"
                size="small"
            />
            <Chip
                onPress={() => setIsSelected(!isSelected)}
                icon={() => <InfoIcon size={15} />}
                selected={isSelected}
                title="deneme"
                size="small"
            />
            <Sticker 
                icon={() => <InfoIcon size={15} />}
                titleColor="accent"
                color="white"
                title="Title"
            />
            <RadioButton
                isSelected={isSelected}
                onChange={() => setIsSelected(!isSelected)}
                title="Deneme mesajı 123 afakslflksd jglksdfj glsjkdfh glkjsdfg kjdfshg kjdshfg kjldsfhg"
            />
            <BadgeHOC
                count={3232323232323232323232232}
            >
                <TextInput
                    hintText="sdasdsa"
                    title="Hi Cnm"
                    size="medium"
                    isInfoSheet={true}
                    isRequired={true}
                    onValidate={(text) => {
                        return /[0-9]|^$/g.test(text);
                    }}
                    inputRef={(e) => {
                        // TODO: will be fix
                        // @ts-ignore
                        inputRef.current = e;
                    }}
                    renderInfoSheetContent={() => {
                        return <View
                            style={{
                                alignContent: "center",
                                justifyContent: "center",
                                alignSelf: "center",
                                alignItems: "center",
                            }}
                        >
                            <BottomSheetHeader
                                isShowGoBack={true}
                                showGoBackSize={20}
                                title="Info Sheet"
                                onGoBack={() => {
                                    navigation.goBack();
                                }}
                            />
                            <Text
                                style={{
                                }}
                            >
                                dsdsd
                            </Text>
                        </View>;
                    }}
                />
            </BadgeHOC>
            <View
                style={{
                    flexDirection: "row",
                    flex: 1
                }}
            >
                <DateTimePicker
                    dateTitle="Tarih seçiniz"
                    buttonTitle="Kaydet"
                    infoText="DENEME"
                    display="spinner"
                    mode="time"
                    title="Deneme"
                    isError={true}
                />
                <DateTimePicker
                    dateTitle="Tarih seçiniz"
                    infoText="DENEME"
                    display="spinner"
                    isError={false}
                    mode="datetime"
                    title="Deneme"
                />
            </View>
        </PageContainer>
        
    </SafeAreaView>;
};
export default Welcome;
