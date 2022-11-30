import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: "#eeeeee",
        fontSize: 14,
        marginLeft: 30,
        borderWidth: 1,
        borderLeftWidth: 10,
        borderColor: '#a0a1a3',
        borderRadius: 10,
        margin: 12,
        padding: 15,
      },
    title: {
        fontSize: 30,
        color: "#64c5e8",
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        color: '#464a54',
        marginLeft: 30,
        marginTop: 5,
    },
    textCanceled: {
        fontSize: 18,
        color: '#464a54',
        marginLeft: 30,
        marginTop: 5,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    loadingIndicator: {
        marginTop: 100
    }
});
