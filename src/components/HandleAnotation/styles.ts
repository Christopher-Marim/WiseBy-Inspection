import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    buttonClose: {
    },
    header: {
        padding: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    nomeAnotation: {
        color: 'black',
        fontSize: 25
    },
    buttons: {
        width: '100%',
        padding: 10,
        paddingBottom: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        borderRadius: 10
    },
    textInput: {
        padding: 10,
        flex:2,
        width: '90%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        borderRadius: 10,
        borderWidth:2,
        fontSize:20
    }
})