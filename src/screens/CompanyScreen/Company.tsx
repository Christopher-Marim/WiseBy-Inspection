import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import styles from './styles';
import { useAuth } from '../../hooks/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Company() {

  const [borderColor, setBorderColer] = useState('black');
  const [Empresa, setEmpresa] = useState('');
  const [LeftPositionAnimation] = useState(new Animated.Value(-200));
  const [RightPositionAnimation] = useState(
    new Animated.Value(Dimensions.get('window').width),
  );

  const navigation: NavigationProp<any> = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(LeftPositionAnimation, {
        toValue: -50,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(RightPositionAnimation, {
        toValue: Dimensions.get('window').width / 1.5,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

  }, []);

  const {user} = useAuth()

  function ActionButtonProsseguir() {
    if (Empresa.length == 0) {
      Alert.alert(
        'Empresa não selecionada',
        'Seleciona sua empresa antes de prosseguir.',
      );
    } else {
      SetEmpresaAsyncStorage();
      navigation.navigate('home');
    }
  }

  async function SetEmpresaAsyncStorage() {
    try {
      await AsyncStorage.setItem('@Empresa', Empresa);
    } catch (e) {
      alert(e)
      console.error(e);
    }
  }

  return (
    <View style={styles.SafeAreaView}>
      <View style={styles.container1}>
        <Animated.View
          style={[
            styles.decorationTop,
            {width:wp('50%'),
             height:hp('12%') },
            {transform: [{translateX: LeftPositionAnimation}]},
          ]}></Animated.View>

        <View style={styles.container1Texts}>
          <Text style={[styles.textETM,{fontSize:hp('3.6%')}]}>{user?.nome}</Text>
          <Text style={[styles.subtextETM, {fontSize:hp('2.15%')}]}>
            Informe a baixo a empresa ou departamento para dar prosseguimento
          </Text>
        </View>
        <Animated.View
          style={[
            styles.decorationBotton,
            {width:wp('50%'),
             height:hp('12%') },
            {transform: [{translateX: RightPositionAnimation}]},
          ]}></Animated.View>
      </View>
      <View style={styles.container2}>
        <View style={{paddingHorizontal: 40, alignItems: 'center'}}>
          <Text style={[styles.subtext, {fontSize:hp('2.65%')}]}>Qual sua empresa?</Text>
          <TouchableOpacity
            style={[styles.picker, {width: wp('80%'), height: hp('6%'), borderColor: borderColor},]}
            onPress={() => {
            }}>
            <Text style={styles.textEmpresa}>{Empresa}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {width: wp('40%'), height: hp('6%')}]}
            onPress={() => {
              ActionButtonProsseguir();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: hp('2.0%'),
                marginHorizontal: 30,
                justifyContent: 'center',
                fontWeight: 'bold',
              }}>
              Prosseguir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
