import React, {
    useState 
} from "react";
import {
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
    SelectBox,
    CheckBox,
    Switch,
    Button,
    Text
} from "isinolacak-cl";
import stylesheet from "./stylesheet";
import {
    CompositeScreenProps,
    useNavigation
} from "@react-navigation/native";
import {
    InfoIcon 
} from "../../../../src/assets/svg";
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

    return <PageContainer
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
            variant="header2"
            style={{
                marginBottom: spaces.content
            }}
        >
            {localize("isinolacak-cl")}
        </Text>
        <Text
            variant="header6"
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
                textColor={activeTheme === "dark" ? "body" : "constrastBody"}
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
                color="constrastBody"
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
            color="constrastBody"
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
            color="constrastBody"
            textColor="body"
            style={{
                marginBottom: spaces.content
            }}
            onPress={() => {
                IOCoreTheme.setTheme(activeTheme === "dark" ? "light" : "dark");
            }}
        />
        <SelectBox
            title="Meslek"
            titleExtractor={(item) => item.val}
            disabled={false}
            multiSelect={true}
            maxChoice={2}
            isNeedConfirm={true}
            onOk={(_, closeSheet, save) => {
                closeSheet();
                save();
            }}
            data={[
                {
                    val: "anam"
                },
                {
                    val: "babam"
                },
                {
                    val: "bee"
                },
                {
                    val: "!!!"
                }
            ]}
            inputTitle="Mesleğiniz"
        />
        <TextInput
            disabled={false}
            size="medium"
        />
        <CheckBox
            title="Chec"
            isSelected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
        />
        <Switch
            isActive={isSelected}
            onPress={() => {
                setIsSelected(!isSelected);
            }}
        />
        <RadioButton
            isSelected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
            title="Deneme mesajı 123 afakslflksd jglksdfj glsjkdfh glkjsdfg kjdfshg kjdshfg kjldsfhg"
        />
        <TextInput
            title="Hi Cnm"
            size="medium"
        />
    </PageContainer>;
};
export default Welcome;
