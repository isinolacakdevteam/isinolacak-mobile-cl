import React from "react";
import Svg, {
    Path
} from "react-native-svg";
import {
    IIOCoreIconPropsType
} from "../../../types/index";

const NotificationIcon = ({
    color = "#9AA6B8",
    size = 100,
    ...props
}: IIOCoreIconPropsType) =>  {
    const pathScale = 100 / size;

    return <Svg
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <Path
            d="M31.224 90.385C35.345 95.624 41.819 99 49.1 99c7.28 0 13.755-3.376 17.876-8.615a133.103 133.103 0 0 1-35.752 0Z"
            scale={1 / pathScale}
            fill={color}
        />
        <Path
            d="M82.17 35.3v3.45c0 4.14 1.182 8.188 3.397 11.633l5.426 8.443c4.957 7.71 1.173 18.192-7.448 20.63a126.388 126.388 0 0 1-68.89 0c-8.62-2.438-12.405-12.92-7.448-20.63l5.426-8.443A21.531 21.531 0 0 0 16.03 38.75V35.3C16.03 16.357 30.835 1 49.1 1c18.265 0 33.072 15.357 33.072 34.3Zm-42.519 3.675c-1.957 0-3.543-1.645-3.543-3.675s1.586-3.675 3.543-3.675H58.55c1.433 0 2.725.895 3.273 2.269.549 1.373.246 2.954-.768 4.005L48.205 51.225H58.55c1.957 0 3.543 1.645 3.543 3.675s-1.586 3.675-3.543 3.675H39.65c-1.433 0-2.725-.895-3.273-2.269-.549-1.373-.246-2.954.768-4.005l12.849-13.326H39.65Z"
            scale={1 / pathScale}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default NotificationIcon;
