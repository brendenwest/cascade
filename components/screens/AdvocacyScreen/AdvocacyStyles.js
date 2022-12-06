import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        marginLeft: 30,
        borderLeftWidth: 10,
        borderColor: '#464a54',
        borderRadius: 10,
        margin: 20,
        padding: 15,
        backgroundColor: '#eeeeee',
    },
    titles: {
        fontSize: 30,
        color: '#64c5e8',
        fontWeight: 'bold',
        margin: 5,
    },
    image: {
        width: width * .8,
        height: height * .3,
        resizeMode: 'stretch',
        borderRadius: 3,
        marginBottom: 15,
        marginTop: 5,
    },
    button: {
        width: 200,
        height: 50,
        alignSelf: 'center',
    },
    loadingIndicator: {
        marginTop: 100
    }
});