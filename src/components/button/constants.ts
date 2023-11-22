import {
    ButtonStyleMappingType 
} from "./types";

export const SIZE_TO_STYLE_MAPPING: ButtonStyleMappingType = {
    "small": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 8
        },
        title: {
            size: "buttonSmall"
        },
        loading: {
            containerSize: "buttonSmall"
        },
        icon: {
            size: 14
        }
    },
    "medium": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 12
        },
        title: {
            size: "buttonMedium"
        },
        loading: {
            containerSize: "buttonMedium"
        },
        icon: {
            size: 18
        }
    },
    "large": {
        container: {
            paddingHorizontal: 20,
            paddingVertical: 16
        },
        title: {
            size: "buttonLarge"
        },
        loading: {
            containerSize: "buttonLarge"
        },
        icon: {
            size: 22
        }
    }
};
