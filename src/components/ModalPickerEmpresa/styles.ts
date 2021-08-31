import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonClose: {
        flex: 1,
        backgroundColor:'transparent'
     
    },
    wrapper2: {
        backgroundColor:'white',
        borderWidth:2,
        maxHeight:'30%',
        borderRadius:10,
        padding: 10,
        marginHorizontal:10
        
    },
    buttonCompany:{
        width: '100%',
        padding: 15,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    empresas:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
    }
   
})