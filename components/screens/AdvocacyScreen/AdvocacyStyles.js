import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        alignItems: 'center',
        margin: 7,
        marginLeft: 20,
        marginRight:20,
        padding: 20,
        backgroundColor: '#ebf0f5',
        borderColor: '#cae1fa',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10,
    },
    titles: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#10768f'
    },
    image: {
        borderColor: '#cae1fa',
        borderWidth: 3,
        borderRadius: 20,
        width: 500,
        height: 300,
    },
    indicator: {
        marginTop: 100
    }
});