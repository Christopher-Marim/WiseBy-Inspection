import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft:12,
        lineHeight:21,
        color: theme.colors.heading
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius:25,
    }
});