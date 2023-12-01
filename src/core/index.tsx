import React, {
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
            <Host>
                {children}
            </Host>
        </GestureHandlerRootView>;
    };

    Provider: FC = ({
        children
    }) => {
        const IOCoreContext = this.IOCoreContext;

        return <IOCoreContext.Provider>
            <this.ContextApi>
                {children}
            </this.ContextApi>
        </IOCoreContext.Provider>;
    };
};

const IOCore = new IOCoreInheritance();

export const IOCoreContext = IOCore.IOCoreContext;
export const IOCoreLocale = IOCoreContext.LocaleContext;
export const IOCoreTheme = IOCoreContext.ThemeContext;
export const IOCoreModal = IOCoreContext.ModalContext;
export default IOCore;
