import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-evenly",
        backgroundColor: 'lightGray'
    },
    webBtnContainer: {
        padding: 10
    },
    joinBtn: {
        backgroundColor: '#f55243',
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    volunteerBtn: {
        backgroundColor: '#fd9b00',
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    donateBtn: {
        backgroundColor: '#7b146b',
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ridesBtnContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    btnImage: {
        height: 100,
        width: 200,
    },
    btnText: {
        color: 'white',
        fontSize: 25,
        padding: 10,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textShadowColor: 'black'
    },
});