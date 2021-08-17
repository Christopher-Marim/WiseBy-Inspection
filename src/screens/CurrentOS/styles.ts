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
        height: Dimensions.get('window').height * .07,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: getStatusBarHeight(),
        backgroundColor: theme.colors.secondary
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
    infoTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 19,
        
    },
    infoText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 19,
        marginBottom:10
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
          flexDirection: 'row',
          padding: 10,
      },
      textButtonCheckList:{
          marginHorizontal:5,
          fontSize:16,
          fontWeight:'500'
      }
})