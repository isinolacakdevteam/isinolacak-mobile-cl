import {
    TextInputStyleMappingType
} from "./types";

export const SIZE_TO_STYLE_MAPPING: (
    spaces: IOCore.SpacesTokensType
) => TextInputStyleMappingType = (spaces) => ({
    "small": {
        contentContainer: {
            paddingVertical: spaces.container / 8,
            paddingHorizontal: spaces.container,
            minHeight: 45,
            height: 45,
        },
        container: {
        }
    },
    "medium": {
        contentContainer: {
            paddingVertical: spaces.container / 4,
            paddingHorizontal: spaces.container,
            minHeight: 60,
            height: 60
        },
        container: {
        }
    },
    "large": {
        contentContainer: {
            paddingVertical: spaces.container / 2,
            paddingHorizontal: spaces.container,
            minHeight: 65,
            height: 65
        },
        container: {
        }
    }
});
