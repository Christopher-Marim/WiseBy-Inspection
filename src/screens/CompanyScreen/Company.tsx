import React, {useEffect, useState} from 'react';
import {
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
import { Company, ModalPickerCompany } from '../../components/ModalPickerEmpresa';
import { AppScreens } from '../../routes/types';

export function CompanyScreen() {

  const [borderColor, setBorderColer] = useState('black');
  const [modalVisiblePicker, setModalVisiblePicker] = useState(false);
  const [Empresa, setEmpresa] = useState<Company>();
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
    if (Empresa?.nomeEmpresa.length == 0) {
      Alert.alert(
        'Empresa não selecionada',
        'Seleciona sua empresa antes de prosseguir.',
      );
    } else {
      SetEmpresaAsyncStorage();
    }
  }

  const empresas = [
    {
      id:'1',
      nomeEmpresa:'ETM',
      systemUnitId:'1',
    },
    {
      id:'2',
      nomeEmpresa:'Sparrows',
      systemUnitId:'2',
    },
    {
      id:'3',
      nomeEmpresa:'Petrobras',
      systemUnitId:'3',
    },
  ]

  async function SetEmpresaAsyncStorage() {
    try {
      await AsyncStorage.setItem('@Empresa', JSON.stringify(Empresa));
      navigation.navigate('DrawerScreens');
    } catch (e) {
      alert(e)
      console.error(e);
    }
  }

  const closeModalPicker = () => setModalVisiblePicker(false)
  
  const selectCompany = (response: Company) => setEmpresa(response)
  

  return (
    <View style={styles.SafeAreaView}>
      <ModalPickerCompany
        companys={empresas}
        selectCompany={(response)=>selectCompany(response)}
        visible={modalVisiblePicker}
        closeModalPicker={closeModalPicker}
      />
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
            Informe a baixo a empresa ou departamento para dar prosseguimento!
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
              setModalVisiblePicker(true)
            }}>
            <Text style={styles.textEmpresa}>{Empresa?.nomeEmpresa}</Text>
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
