import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginLeft: 12,

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,

    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: -10,
        marginTop: 10

    },
    buttonFilter: {
        alignItems: 'center',
        width: '50%',
        padding: 5,
    },
    textButtonFilter: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.colors.gray
    },
    textInput: {
        backgroundColor: theme.colors.white,
        position: 'absolute',
        right: 0,
        width: '100%',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 3,
        borderColor: theme.colors.heading
    },
    textInput2: {
        backgroundColor: theme.colors.white,
        height: '100%',
        paddingRight: 25,
        fontSize: 16
    }
});