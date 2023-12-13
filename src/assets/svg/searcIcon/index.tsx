import * as React from "react";
import Svg, {
    Path 
} from "react-native-svg";
import {
    IIOCoreIconPropsType 
} from "../../../types";
const SearchIcon = ({
    size = 20,
    color = "#45BBD4",
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 20 / size;

    return <Svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            fillRule="evenodd"
            d="M9.114 3.83a5.285 5.285 0 1 0 0 10.568 5.285 5.285 0 0 0 0-10.569Zm-6.91 5.284a6.91 6.91 0 1 1 12.337 4.278l3.684 3.684a.813.813 0 0 1-1.15 1.15l-3.683-3.685A6.91 6.91 0 0 1 2.204 9.113Z"
            clipRule="evenodd"
            scale={1 / pathScale}
        />
        <Path
            fill={color}
            fillRule="evenodd"
            d="M2 9.114a7.114 7.114 0 1 1 12.811 4.26l3.558 3.558a1.016 1.016 0 1 1-1.437 1.437l-3.558-3.558A7.114 7.114 0 0 1 2 9.114Zm7.114-6.708a6.707 6.707 0 1 0 4.152 11.976.203.203 0 0 1 .27.016l3.683 3.684a.61.61 0 0 0 .863-.863l-3.684-3.684a.203.203 0 0 1-.016-.27 6.707 6.707 0 0 0-5.268-10.86Zm0 1.627a5.081 5.081 0 1 0 0 10.162 5.081 5.081 0 0 0 0-10.162Zm-5.488 5.08a5.488 5.488 0 1 1 10.976 0 5.488 5.488 0 0 1-10.976 0Z"
            clipRule="evenodd"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default SearchIcon;
