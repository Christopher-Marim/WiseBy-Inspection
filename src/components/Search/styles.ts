import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        fontSize: 16,
        width:'80%',
        height:50,
        fontWeight: '500',
        lineHeight: 21,
        color: theme.colors.line
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'100%',
        height: 40,
        borderRadius: 25,
        backgroundColor: theme.colors.heading
    }
});