import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
       
        width: '98%',
        paddingHorizontal: 15,
        
    },
    container: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 80,

        elevation: 7,

    },
    title: {
        marginTop: 5,
        fontSize: 22,
        color: theme.colors.titleColor,
    },
    dateText: {
        fontSize: 14,
        color: theme.colors.subFonts,
    },
    statusText: {
        fontSize: 14,
        color: theme.colors.titleColor,
        marginBottom:5
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: theme.colors.gray,
    },
    buttons:{
        flexDirection:'row',
        padding:3,
        paddingHorizontal:15
    },
    button: {
        justifyContent: 'center',
        paddingVertical:5,
        marginRight:25
    },
    buttonText:{
        fontWeight:'bold'
    }
})