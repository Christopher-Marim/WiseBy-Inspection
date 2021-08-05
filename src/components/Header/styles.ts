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
        color: theme.colors.titleColor
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
        paddingTop: 10

    },
    buttonFilter: {
        alignItems: 'center',
        width: 110,
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
        fontSize: 16
    }
});