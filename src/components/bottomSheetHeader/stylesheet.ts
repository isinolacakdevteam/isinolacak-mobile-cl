import {
    StyleSheet
} from "react-native";

export const stylesheet = StyleSheet.create({
    container: {
        borderBottomColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:20,
        minHeight: 45
    },
    content: {
        alignItems: 'center',
        flex: 1
    },
    title: {
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    }
});
