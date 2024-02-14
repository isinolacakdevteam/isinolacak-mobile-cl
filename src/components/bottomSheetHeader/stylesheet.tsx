import {
    StyleSheet
} from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginBottom:20,
        minHeight: 45
    },
    content: {
        alignItems: 'center',
        flex: 1
    },
    title: {
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    }
});
