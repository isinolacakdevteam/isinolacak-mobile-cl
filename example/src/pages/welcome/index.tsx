import React, {
    useState,
    useRef
} from "react";
import {
    TextInput as NativeTextInput,
    SafeAreaView,
    StatusBar,
    Image,
    View
} from 'react-native';
import {
    PageContainer,
    IOCoreLocale,
    RadioButton,
    IOCoreTheme,
    TextInput,
    StateCard,
    CheckBox,
    BadgeHOC,
    Button,
    Chip,
    Text
} from "isinolacak-cl";
import stylesheet from "./stylesheet";
import {
    CompositeScreenProps,
    useNavigation
} from "@react-navigation/native";
import {
    InfoIcon,
    SearchIcon
} from "../../../../src/assets/svg";
import BottomSheetHeader from "../../../../src/components/bottomSheetHeader";

const lightIcon = require("../../../assets/lightlogo.png");
const darkIcon = require("../../../assets/darklogo.png");

const Welcome = () => {
    const {
        activeTheme,
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        activeLocale,
        localize
    } = IOCoreLocale.useContext();

    const navigation = useNavigation<CompositeScreenProps<any, any>["navigation"]>();

    const [isSelected, setIsSelected] = useState(false);

    const inputRef = useRef<NativeTextInput | null>(null);

    return <SafeAreaView
        style={{
            backgroundColor: colors.layer1,
            flex: 1
        }}
    >
        <BottomSheetHeader 
            renderRight={<SearchIcon />}
            isShowGoBack={true}
            title="Welcome"
            onGoBack={() => {
                navigation.goBack();
            }}
        />

        <PageContainer
            contentContainerStyle={stylesheet.contentContainer}
        >
            <StatusBar
                barStyle={activeTheme === "dark" ? "light-content" : "dark-content"}
                backgroundColor={colors.layer1}
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
                {localize("isinolacak-cl")}
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
                        IOCoreTheme.setTheme(activeTheme === "dark" ? "light" : "dark");
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
            <Chip
                title="deneme"
                size="small"
                selected={isSelected}
                onPress={() => setIsSelected(!isSelected)}
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
                    title="Hi Cnm"
                    size="medium"
                    isInfoSheet={true}
                    isRequired={true}
                    onValidate={(text) => {
                        return /[0-9]|^$/g.test(text);
                    }}
                    inputRef={(e) => {
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
                                renderRight={<SearchIcon color={colors.error} size={20} />}
                                renderLeft={<SearchIcon color={colors.black} size={20} />}
                                titleVariant="body-medium"
                                titleColor="primary"
                                isShowGoBack={true}
                                title="Info Sheet"
                                size={30}
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
        </PageContainer>
    </SafeAreaView>;
};
export default Welcome;
