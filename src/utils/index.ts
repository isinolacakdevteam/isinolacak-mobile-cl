import {
    Dimensions
} from "react-native";

const window = Dimensions.get("window");
export const windowHeight = window.height;
export const windowWidth = window.width;

export const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
