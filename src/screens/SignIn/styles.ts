import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    justifyContent:'center',
    backgroundColor: '#FFF',
    marginBottom: 15,
    color: '#222',
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnSolicit: {
    marginTop: 10,
  },
  solicitText: {
    color: '#FFF',
    borderBottomWidth:1,
    borderColor:'white'
  },
  textInputSenha:{
    flexDirection:'row'
  },
  buttonEye:{
    position:'absolute',
    right:10,
  },

});
