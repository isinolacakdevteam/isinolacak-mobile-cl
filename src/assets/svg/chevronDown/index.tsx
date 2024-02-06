import React from "react";
import Svg, {
    Path
} from "react-native-svg";
import { 
    IIOCoreIconPropsType
} from "../../../types";

const ChevronDownICon = ({
    color = "#9AA6B8",
    size = 24,
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 24 / size;

    return <Svg
        height={size / 2}
        width={size}
        fill="none"
        {...props}
    >
        <Path
            d="M.28.406A1.161 1.161 0 0 1 1.917.28L12 8.922 22.083.28a1.161 1.161 0 0 1 1.511 1.763l-10.838 9.29a1.161 1.161 0 0 1-1.512 0L.406 2.043A1.161 1.161 0 0 1 .28.406Z"
            scale={1 / pathScale}
            clipRule="evenodd"
            fillRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default ChevronDownICon;
