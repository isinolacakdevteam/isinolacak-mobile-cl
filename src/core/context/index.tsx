import React, {
    ReactNode
} from "react";
import ThemeContextInheritance from "./theme";
import LocaleContextInheritance from "./locale";
import ModalContextInheritance from "./modal";
import light from "../theme/variants/light";
import {
    en,
    tr
} from "../locales";
import {
    IOCoreContextConfigType
} from "../../types";
import {
    Host
} from "react-native-portalize";
import {
    GestureHandlerRootView
} from "react-native-gesture-handler";

class Context {
    ThemeContext;
    LocaleContext;
    ModalContext;

    constructor(config: IOCoreContextConfigType) {
        this.ThemeContext = new ThemeContextInheritance(
            {
                initialThemeKey: "light",
                ...light,
                ...light.designTokens,
            },
            {
                ...config,
                key: "IOCoreTheme"
            }
        );

        this.LocaleContext = new LocaleContextInheritance(
            {
                initialLanguage: "en",
                locales: [
                    en,
                    tr
                ]
            },
            {
                ...config,
                key: "IOCoreLocale"
            }
        );

        this.ModalContext = new ModalContextInheritance(
            [],
            {
                ...config,
                key: "IOCoreModal"
            }
        );
    }

    ContextAPI = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const {
            colors
        } = this.ThemeContext.useContext();

        return <GestureHandlerRootView
            style={[
                {
                    backgroundColor: colors.layer1,
                    flex: 1
                }
            ]}
        >
            <Host>
                {children}
            </Host>
        </GestureHandlerRootView>;
    };

    Provider = ({
        children
    }: {
        children: ReactNode
    }) => {
        const ModalContext = this.ModalContext;
        const LocaleContext= this.LocaleContext;
        const ThemeContext = this.ThemeContext;

        const ContextAPI = this.ContextAPI;

        return <ThemeContext.Provider>
            <LocaleContext.Provider>
                <ContextAPI>
                    <ModalContext.Render>
                        {children}
                    </ModalContext.Render>
                </ContextAPI>
            </LocaleContext.Provider>
        </ThemeContext.Provider>;
    };
};
export default Context;
