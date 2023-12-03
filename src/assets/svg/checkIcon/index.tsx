import React from "react";
import Svg, {
    SvgProps,
    Path 
} from "react-native-svg";
import { 
    IIOCoreIconPropsType 
} from "../../../types";

const CheckIcon = ({
    size = 31,
    color = "#ffffff",
    ...props
}: IIOCoreIconPropsType) => {
    const pathScale = 31 / size;

    return <Svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            fillRule="evenodd"
            d="M28.666 2.642a3.244 3.244 0 0 0-4.566.698L11.082 19.787l-4.722-4a3.244 3.244 0 0 0-3.261-.549 3.288 3.288 0 0 0-2.065 2.604 3.307 3.307 0 0 0 1.248 3.088l7.374 6.139c.579.465 1.3.715 2.04.709a3.267 3.267 0 0 0 2.628-1.318L29.358 7.255a3.312 3.312 0 0 0-.692-4.613Z"
            clipRule="evenodd"
            scale={1/ pathScale}
        />
    </Svg>;
};
export default CheckIcon;
