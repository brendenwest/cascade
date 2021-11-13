import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: 'gray'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        image: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: 200,
            height: 100,
          }
    },
});