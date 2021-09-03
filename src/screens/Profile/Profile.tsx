import React, { useState, useEffect } from "react";

import {
  Alert,
  Image,
  TextInput,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { Company } from "../../components/ModalPickerEmpresa";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { Fotos } from "../../redux/types";

export function Profile(props: any) {
  const [currentFoto, SetCurrentFoto] = useState<Fotos>({} as Fotos);
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

  async function imagePickerCall() {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      if (status != "granted") {
        Alert.alert(
          "Não autorizado",
          "Nós precisamos de autorização para prosseguir"
        );
        return;
      }
    }
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (data.cancelled) {
      Alert.alert("Operação cancelada");
      return;
    }
    if (!data.cancelled && data.uri.length == 0) {
      Alert.alert("Imagem não processada");
      return;
    }

    const imagem = {
      id: "null",
      nome: 'Foto Perfil',
      conteudo: `${data.uri}`,
    };
    SetCurrentFoto(imagem);
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode={"cover"}
        imageStyle={styles.image}
        source={require(currentFoto?currentFoto.conteudo:"../../assets/Capture.png")}
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
        <TouchableOpacity 
        onPress={() => imagePickerCall()}
        style={styles.buttonNewPicture}>
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
              source={require(currentFoto?currentFoto.conteudo:"../../assets/Capture.png")}
              resizeMode="cover"
              style={styles.imagePerfil}
            />
          </View>
          <View style={styles.textNameWraper}>
            <Text style={styles.textName}>{user?.nome.toUpperCase()}</Text>
            <Text style={styles.textEmail}>{user?.login}</Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              paddingHorizontal: 50,
              backgroundColor: "red",
            }}
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
