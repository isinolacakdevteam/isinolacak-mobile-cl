import React, {
    ReactNode
} from "react";
import Context from "./context";
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

    Provider = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const IOCoreContext = this.IOCoreContext;

        return <IOCoreContext.Provider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </IOCoreContext.Provider>;
    };
};

const IOCore = new IOCoreInheritance();

export const IOCoreContext = IOCore.IOCoreContext;
export const IOCoreLocale = IOCoreContext.LocaleContext;
export const IOCoreTheme = IOCoreContext.ThemeContext;
export const IOCoreModal = IOCoreContext.ModalContext;
export default IOCore;
