import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    element: {
        backgroundColor: '#0D8FCB',
    },
    stayConnectedBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5
    },
    stayConnectedTxt: {
        letterSpacing: 1,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 38,
    },
    joinDonateShoptxt: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    separator: {
        // marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});