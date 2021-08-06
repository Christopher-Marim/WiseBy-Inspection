import {Dimensions, StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    lottie: {
      width: Dimensions.get('window').width/1.7,
      height:Dimensions.get('window').width/1.7
    },
    loader: { 
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor:'rgba(0,0,0, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
    }
  });