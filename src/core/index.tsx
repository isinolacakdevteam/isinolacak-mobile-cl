import React, {
    ReactNode,
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

class IOCoreInheritance {
    IOCoreContext;

    constructor() {
        this.IOCoreContext = new Context({
            key: "IOCore"
        });
    }

    ContextApi: FC = ({
        children
    }) => {
        const {
            colors
        } = IOCoreContext.ThemeContext.useContext();

        return <GestureHandlerRootView
            style={[
                stylesheet.container,
                {
                    backgroundColor: colors.layer1
                }
            ]}
        >
            <ToastProvider>
                <Host>
                    {children}
                </Host>
            </ToastProvider>
        </GestureHandlerRootView>;
    };

    Provider = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const IOCoreContext = this.IOCoreContext;
        const ContextAPI = this.ContextApi;

        return <IOCoreContext.Provider>
            <ContextAPI>
                {children}
            </ContextAPI>
        </IOCoreContext.Provider>;
    };
};

const IOCore = new IOCoreInheritance();

export const IOCoreContext = IOCore.IOCoreContext;
export const IOCoreLocale = IOCoreContext.LocaleContext;
export const IOCoreTheme = IOCoreContext.ThemeContext;
export const IOCoreModal = IOCoreContext.ModalContext;
export default IOCore;
