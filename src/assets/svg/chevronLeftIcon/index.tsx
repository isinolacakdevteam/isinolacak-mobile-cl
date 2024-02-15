import React from "react";
import Svg, {
    Path
} from "react-native-svg";
import {
    IIOCoreIconPropsType
} from "../../../types";
const ChevronLeft = ({
    color = "#191919",
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
            d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081Z"
            scale={1 / pathScale}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default ChevronLeft;
