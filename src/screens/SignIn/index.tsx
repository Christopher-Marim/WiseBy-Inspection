import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  StatusBar,
  Dimensions,
  Keyboard,
  Linking,
} from 'react-native';

import {styles} from './styles';

import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';



export function SignIn({navigation}:any) {

    const {width:wd, height:hg} = Dimensions.get('window')

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [internet, setInternet] = useState();

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [LoaderVisible, setVisible] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);
  const [PasswordVisible, setPasswordVisible] = useState(true);

  const [imageHeight] = useState(new Animated.Value(1));

  const { user,signed, signIn } = useAuth();
  
  async function handleSign() {
    signIn({login,senha});
  }

  const keyboardWillHide = (event:any) => {
    Animated.timing(imageHeight, {
      duration: 500,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const keyboardWillShow = (event:any) => {
    Animated.timing(imageHeight, {
      duration: 300,
      toValue: 0.6,
      useNativeDriver: true,
    }).start();
  };

  //ao iniciar a aplicação fará a validação se a chave registrada no storage é igual a do banco de dados, caso seja entrará na
  //aplicação, caso não solicitará que faça o login
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 5,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardWillShow);
    Keyboard.addListener('keyboardDidHide', keyboardWillHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardWillShow);
      Keyboard.removeListener('keyboardDidHide', keyboardWillHide);
    };
  }, []);


  return (
      <LinearGradient style={{flex:1}} 
      
      colors={[theme.colors.blue, theme.colors.primary]}>
         <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: 200,
            transform: [{scale: imageHeight}],
            height: 200,
            borderRadius: 10,
          }}
          source={require('../../assets/iconWhite.png')}
        />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          style={[
            styles.input,
            {
              fontSize: 18,
              width: wd*0.8,
              height: hg*0.055,
            },
          ]}
          placeholder="Login"
          placeholderTextColor="grey"
          value={login}
          autoCorrect={false}
          onChangeText={text => setLogin(text)}
          keyboardType={'email-address'}
        />
        <View style={styles.textInputSenha}>
          <TextInput
            style={[
              styles.input,
              {
                fontSize: 18,
                width: wd*0.8,
                height: hg*0.055,
              },
            ]}
            placeholder="Senha"
            placeholderTextColor="grey"
            autoCorrect={false}
            value={senha}
            onChangeText={text => setSenha(text)}
            secureTextEntry={PasswordVisible}
          />
          <TouchableOpacity
            style={[styles.buttonEye,{top:10}]}
            onPress={() => {
              setPasswordVisible(!PasswordVisible);
            }}>
            {!PasswordVisible && (
              <Entypo name="eye" size={25} color={theme.colors.blue}/>
            )}
            {PasswordVisible && (
              <MaterialCommunityIcons name="eye-off-outline" size={25} color={theme.colors.gray} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.btnSubmit, {width: wd*0.8,
            height: hg*0.055,}]}
          onPress={handleSign}>
          <Text style={[styles.submitText, {fontSize:18}]}>
            Acessar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSolicit}
          onPress={() => {
            Linking.openURL('https://www.etm.srv.br');
          }}>
          <Text style={[styles.solicitText, {fontSize: 14}]}>Precisa de ajuda?</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
    </LinearGradient>
  );
}
