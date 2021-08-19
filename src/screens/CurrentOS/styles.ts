import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    wraper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    header: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('window').height*.10,
        backgroundColor: theme.colors.secondary,
        elevation:2
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: -15,
        fontFamily: 'Roboto',
        color: theme.colors.titleColor
    },
    buttonBack: {
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 16,
        color: theme.colors.titleColor
    },
   
})