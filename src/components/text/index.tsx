import React, {
    FC
} from  "react";
import {
    Text as NativeText
} from "react-native";
import ITextProps from "./types";
import IOCore from "../../core";

const Text: FC<ITextProps> = ({
    variant = "body-regular",
    children,
    color,
    style,
    ...props
}) => {
    const {
        typography,
        colors
    } = IOCore.IOCoreContext.ThemeContext.useContext();

    return <NativeText
        {...props}
        style={[
            style,
            {
                color: color ? colors[color] : colors.body,
                ...typography[variant]
            }
        ]}
    >
        {children}
    </NativeText>;
};
export default Text;
