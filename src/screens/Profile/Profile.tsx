import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState, useEffect } from "react";
import { Image, TextInput } from "react-native";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Company } from "../../components/ModalPickerEmpresa";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export function Profile(props: any) {
  const [empresa, setEmpresa] = useState<Company>();
  const { user } = useAuth();

  useEffect(() => {
    getEmpresa();
  }, []);

  async function getEmpresa() {
    const empresaResponse = await AsyncStorage.getItem("@Empresa");
    const empresaAux = JSON.parse(empresaResponse ? empresaResponse : "{}");

    setEmpresa(empresaAux);
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode={"cover"}
        imageStyle={styles.image}
        source={require("../../assets/Capture.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonHeader}
            onPress={() => props.navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.textHeader}>PROFILE</Text>
          <TouchableOpacity style={styles.buttonHeader}>
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonNewPicture}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.wrapperPerfil}>
          <View style={styles.imageMoldure}>
            <Image
              source={require("../../assets/Capture.png")}
              resizeMode="cover"
              style={styles.imagePerfil}
            />
          </View>
          <View style={styles.textNameWraper}>
            <Text style={styles.textName}>{user?.nome.toUpperCase()}</Text>
            <Text style={styles.textEmail}>{user?.login}</Text>
          </View>
          <ScrollView
          contentContainerStyle={{flex:1,paddingHorizontal:50 , backgroundColor:'red'}}
          >
            <View style={styles.wrapperInfos}>
              <View style={styles.info}>
                <Text style={styles.textInfoTitle}>Nome</Text>
                <Text style={styles.textInfoSubTitle}>{user?.nome}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.textInfoTitle}>Login</Text>
                <Text style={styles.textInfoSubTitle}>{user?.login}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.textInfoTitle}>Senha</Text>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  value={user?.senha}
                ></TextInput>
              </View>
              <View style={styles.info}>
                <Text style={styles.textInfoTitle}>Empresa</Text>
                <Text style={styles.textInfoSubTitle}>
                  {empresa?.nomeEmpresa}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
