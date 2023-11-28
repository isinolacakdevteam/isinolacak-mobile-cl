import React from "react";
import Svg, {
    Path 
} from "react-native-svg";
import {
    IIOCoreIconPropsType 
} from "../../../types/index";

const Info = ({
    size = 30,
    color = "#697488",
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 114 / size;

    return <Svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            fillRule="evenodd"
            d="M108.6 57.3c0 28.332-22.968 51.3-51.3 51.3C28.968 108.6 6 85.632 6 57.3 6 28.968 28.968 6 57.3 6c28.332 0 51.3 22.968 51.3 51.3ZM63.713 31.65a6.413 6.413 0 1 1-12.826 0 6.413 6.413 0 0 1 12.825 0ZM50.888 50.888a6.413 6.413 0 0 0 0 12.825V82.95a6.413 6.413 0 0 0 6.412 6.412h6.413a6.413 6.413 0 0 0 0-12.825V57.3a6.413 6.413 0 0 0-6.413-6.412h-6.412Z"
            clipRule="evenodd"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default Info;
