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

    Provider = ({
        children
    }: {
        children: ReactNode
    }) => {
        const ModalContext = this.ModalContext;
        const LocaleContext= this.LocaleContext;
        const ThemeContext = this.ThemeContext;

        return <ThemeContext.Provider>
            <LocaleContext.Provider>
                <ModalContext.Render>
                    {children}
                </ModalContext.Render>
            </LocaleContext.Provider>
        </ThemeContext.Provider>;
    };
};
export default Context;
