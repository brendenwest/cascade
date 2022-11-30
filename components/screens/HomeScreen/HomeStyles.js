import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webBtnContainer: {
        padding: 10,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
    },
    joinBtn: {
        marginTop: 120,
        backgroundColor: '#f55243',
        marginBottom: 17,
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    volunteerBtn: {
        backgroundColor: '#fd9b00',
        marginBottom: 17,
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    donateBtn: {
        backgroundColor: '#7b146b',
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ridesBtnContainer: {
        alignItems: 'center',
        marginTop: 100,
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
        textShadowColor: 'black',
    },
});