

import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    textHeader: {
        fontSize: 20,
        color: 'white'
    },
    image: {
        height: '100%',
        width: '100%',
        opacity: 0.7
    },
    backgroundImage: {
        width: '100%',
        height: '30%',
        backgroundColor: 'blue',

    },
    buttonHeader: {},
    buttonNewPicture: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    wrapperPerfil:{
        justifyContent:'center',
        alignItems: 'center',
        width: '85%',

    },
    imagePerfil: {
        width: '100%',
        height: '100%',
        overflow: "hidden",
        borderRadius:100,
        
    },
    imageMoldure:{
        borderWidth:6,
        borderRadius:100,
        height:200,
        width:200,
        justifyContent:"center", 
        alignItems:"center",
        marginTop:-100,
        borderColor:'white'
    },
    textNameWraper:{
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textName:{
        fontWeight:'bold',
        fontSize:20
    },
    textEmail:{
        color: 'gray',
    },
    wrapperInfos:{
        marginTop:20,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width: '100%',
    },
    textInfoTitle:{
        fontSize:18,
        color: 'blue',
        paddingBottom:5
    },
    textInfoSubTitle:{
        fontSize:16,
        fontWeight:'bold',
    },
    info:{
        paddingBottom:30
    },
    textInput:{
        paddingLeft:3
    }

});
