import {StyleSheet} from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'green'
    },
    stretch: {
        width: '100%',
        borderColor:theme.colors.blue,
        marginRight:5,
      },
      wrapper:{
          width:'100%',
          height: '100%',
          alignItems:'center',
          justifyContent:'space-between',
          backgroundColor:'black',
    },
    buttonClose:{
    },
    header:{
        padding: 10,
        width: '100%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    nomeImage:{
        color: 'white',
        fontSize:25
    },
    buttons:{
        width: '100%',
        padding: 10,
        paddingBottom:30
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        width: '100%',
        borderRadius:10
    }
})