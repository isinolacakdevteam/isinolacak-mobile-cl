import React from "react";
import Svg, {
    Path
} from "react-native-svg";
import {
    IIOCoreIconPropsType
} from "../../../types";

const EyeClosed = ({
    color = "#9AA6B8",
    size = 24,
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 24 / size;

    return <Svg
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <Path
            d="M22.295 10.06a.75.75 0 0 1 .394.986L22 10.75l.69.296v.001l-.002.003-.003.007-.01.024-.039.084a13.849 13.849 0 0 1-.727 1.321 15.055 15.055 0 0 1-1.846 2.394l.968.969a.75.75 0 0 1-1.06 1.06l-1.001-1a11.548 11.548 0 0 1-2.274 1.497l.934 1.435a.75.75 0 1 1-1.258.818l-1.089-1.674c-.78.255-1.623.428-2.532.49v1.775a.75.75 0 0 1-1.5 0v-1.775c-.881-.06-1.7-.225-2.46-.466l-1.074 1.65a.75.75 0 1 1-1.258-.818l.913-1.402a11.503 11.503 0 0 1-2.293-1.49l-.96.96a.75.75 0 0 1-1.061-1.06l.924-.924a15.034 15.034 0 0 1-2.467-3.455 9.57 9.57 0 0 1-.188-.388l-.01-.025-.004-.007v-.003H1.31L2 10.75l-.69.296a.75.75 0 0 1 1.379-.592v.002l.007.014.029.063a12.388 12.388 0 0 0 .65 1.177c.475.76 1.197 1.747 2.18 2.662.867.805 1.928 1.546 3.197 2.034A8.97 8.97 0 0 0 12 17a8.963 8.963 0 0 0 3.312-.619c1.262-.497 2.316-1.243 3.175-2.049a13.3 13.3 0 0 0 2.789-3.8l.028-.063.006-.013v-.001m.985-.394a.75.75 0 0 0-.984.394Zm-19.606.393Z"
            scale={1 / pathScale}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default EyeClosed;