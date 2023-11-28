import React from "react";
import {
    NavigationContainer
} from "@react-navigation/native";
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';

import {
    WelcomePage,
    TextPage
} from "../pages";
import {
    IOCoreTheme 
} from "../../../src/core";

const RootStack = createNativeStackNavigator();

const Root = () => {
    const {
        colors
    } = IOCoreTheme.useContext();

    return <NavigationContainer>
        <RootStack.Navigator
            screenOptions={{
                animation: "slide_from_right",
                headerStyle: {
                    backgroundColor: colors.layer1
                },
                headerTitleStyle: {
                    color: colors.body
                },
                headerTintColor: colors.body
            }}
        >
            <RootStack.Screen
                name="Welcome"
                component={WelcomePage}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="Text"
                component={TextPage}
            />
        </RootStack.Navigator>
    </NavigationContainer>;
};
export default Root;
