import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export default StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors_dark.primary,
  },
  container1: {
    flex: 1,
    backgroundColor: theme.colors_dark.primary,
    justifyContent: 'center',
  },

  container1Texts: {
    paddingHorizontal: 20,
  },
  container2: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    flex: 1.8,
    justifyContent: 'center',
  },
  textETM: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  subtextETM: {
    paddingTop: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  decorationTop: {
    backgroundColor: '#0011ff',
    width: 200,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: -40,
  },
  decorationBotton: {
    backgroundColor: '#0011ff',
    width: 200,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    bottom: -40,
  },
  subtext: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  picker: {
    width: 350,
    height: 50,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    marginTop: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textEmpresa: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
