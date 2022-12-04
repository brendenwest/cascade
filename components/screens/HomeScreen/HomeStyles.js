import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
       padding: 10,
    },
    webBtnContainer: {


    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
    },
    joinBtn: {
        backgroundColor: '#f55243',
        marginBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    volunteerBtn: {
        backgroundColor: '#fd9b00',
        marginBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    donateBtn: {
        backgroundColor: '#7b146b',
        marginBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ridesBtnContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    btnImage: {
        height: height * .1,
        width: width * .3 ,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textShadowColor: 'black',
    },
});