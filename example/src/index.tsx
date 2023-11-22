import React from 'react';
import {
    ActivityIndicator
} from 'react-native';
import {
    PageContainer,
    IOCoreTheme,
    IOCore
} from "isinolacak-cl";
import stylesheet from './stylesheet';
import {
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_300Light,
    useFonts
} from "@expo-google-fonts/inter";
import Navigation from "./navigation";

const ContextAPI = () => {
    const {
        colors
    } = IOCoreTheme.useContext();

    let [fontsLoaded, fontError] = useFonts({
        "Inter-SemiBold": Inter_600SemiBold,
        "Inter-Regular": Inter_400Regular,
        "Inter-Medium": Inter_500Medium,
        "Inter-Light": Inter_300Light
    });

    if(!fontsLoaded && !fontError) {
        return <PageContainer
            scrollable={false}
            style={stylesheet.loadingContainer}
        >
            <ActivityIndicator
                color={colors.primary}
                size="large"
            />
        </PageContainer>;
    }

    return <Navigation/>;
};

const App = () => {
    return <IOCore.Provider>
        <ContextAPI/>
    </IOCore.Provider>;
};
export default App;
