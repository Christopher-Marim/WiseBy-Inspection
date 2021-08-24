import {StyleSheet} from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
    flex:1,
     width: '100%'
    },
    checkListTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 19,
    },
    buttonGroup:{
        padding: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    stretch: {
        width: 100,
        height: 100,
        borderWidth:2,
        borderRadius:10,
        borderColor:theme.colors.blue,
        marginRight:5
      },
      wraperFotos:{
          flexDirection: 'row',
          padding: 10,
      },
      buttonsCheckList:{
          borderTopWidth:2,
          justifyContent:'space-around',
          flexDirection: 'row',
          marginHorizontal:10,
          marginTop:20
      },
      buttonCheckList:{
          alignItems:'center',
          justifyContent:'center',
          margin: 5,
          flexDirection: 'row',
          padding: 10,
          width: '50%',
      },
      textButtonCheckList:{
          marginHorizontal:5,
          fontSize:16,
          fontWeight:'500'
      }
})