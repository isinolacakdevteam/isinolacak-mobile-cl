import React, {
    ReactNode,
    useEffect,
    useState,
    FC
} from "react";
import stylesheet from "./stylesheet";
import {
    GestureHandlerRootView
} from "react-native-gesture-handler";
import Context from "./context";
import {
    Host
} from "react-native-portalize";
import {
    ToastProvider
} from 'react-native-toast-notifications';
import {
    ThemeContextType
} from "../types";

class IOCoreInheritance {
    IOCoreContext;

    constructor() {
        this.IOCoreContext = new Context({
            key: "IOCore"
        });
    }

    ContextAPI: FC<{
        onUpdateThemeState: (themeState: ThemeContextType) => void;
        children: ReactNode;
    }> = ({
            onUpdateThemeState,
            children
        }) => {
            const themeState = this.IOCoreContext.ThemeContext.useContext();

            useEffect(() => {
                if(onUpdateThemeState) onUpdateThemeState(themeState);
            }, [themeState]);

            return <>
                {children}
            </>;
        };

    Provider = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const [themeState, setThemeState] = useState<null | ThemeContextType>();

        const IOCoreContext = this.IOCoreContext;
        const ContextAPI = this.ContextAPI;

        return <GestureHandlerRootView
            style={[
                stylesheet.container,
                {
                    backgroundColor: themeState && themeState.colors ? themeState.colors.layer1 : "white"
                }
            ]}
        >
            <IOCoreContext.Provider>
                <ToastProvider>
                    <Host>
                        <ContextAPI
                            onUpdateThemeState={(themeState: ThemeContextType) => {
                                setThemeState(themeState);
                            }}
                        >
                            {children}
                        </ContextAPI>
                    </Host>
                </ToastProvider>
            </IOCoreContext.Provider>
        </GestureHandlerRootView>;
    };
};

const IOCore = new IOCoreInheritance();

export const IOCoreContext = IOCore.IOCoreContext;
export const IOCoreLocale = IOCoreContext.LocaleContext;
export const IOCoreTheme = IOCoreContext.ThemeContext;
export const IOCoreModal = IOCoreContext.ModalContext;
export default IOCore;
