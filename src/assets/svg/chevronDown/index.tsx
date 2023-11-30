import React from "react";
import Svg, {
    SvgProps,
    Path 
} from "react-native-svg";
import { 
    IIOCoreIconPropsType 
} from "../../../types";

const ChevronDownICon = ({
    size = 24,
    color = "#9AA6B8",
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 24 / size;

    return <Svg
        width={size}
        height={size / 2}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            fillRule="evenodd"
            d="M.28.406A1.161 1.161 0 0 1 1.917.28L12 8.922 22.083.28a1.161 1.161 0 0 1 1.511 1.763l-10.838 9.29a1.161 1.161 0 0 1-1.512 0L.406 2.043A1.161 1.161 0 0 1 .28.406Z"
            clipRule="evenodd"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default ChevronDownICon;
