import React from "react";
import Svg, {
    ClipPath,
    Path,
    Defs,
    G 
} from "react-native-svg";

const BackCamera = ({
    size = 1, color = "#000", style, ...props 
}) => {
    return (
        <Svg
            width={20}
            height={20}
            fill="none"
            style={[
                {
                    transform: [
                        {
                            scale: size,
                        },
                    ],
                },
                style,
            ]}
            {...props}
        >
            <G clipPath="url(#a)">
                <Path
                    d="M8.334 16.667H4.167v1.666h4.167V20l2.5-2.5-2.5-2.5v1.667Zm3.333 0v1.666h4.167v-1.666h-4.167ZM14.167 0H5.834c-.917 0-1.667.75-1.667 1.667v11.666c0 .917.75 1.667 1.667 1.667h8.333c.917 0 1.667-.75 1.667-1.667V1.667C15.834.75 15.084 0 14.167 0ZM10 5c-.925 0-1.666-.75-1.666-1.667 0-.916.741-1.666 1.658-1.666.917 0 1.667.75 1.667 1.666A1.66 1.66 0 0 1 10 5Z"
                    fill={color}
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill={color} d="M0 0h20v20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
export default BackCamera;