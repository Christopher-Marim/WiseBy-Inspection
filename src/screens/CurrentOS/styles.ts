import { StatusBar } from "react-native";
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('window').height*.10,
        backgroundColor: theme.colors.secondary,
       
    },
    headerwrapper: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:getStatusBarHeight(),
        width: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: theme.colors.titleColor
    },
    buttonBack: {
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textButton: {
        fontSize: 16,
        color: theme.colors.titleColor
    },
   
})