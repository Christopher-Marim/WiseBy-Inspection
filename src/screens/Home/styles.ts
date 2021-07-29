import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center"
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
    height: '10%'
  },
  search: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  slider: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width:'95%',
  },
  categories: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  lista:{
    flex:1,
    paddingTop:5
  }

});