import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
  StatusBar,
} from "react-native";

import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useSelector } from "react-redux";
import {
  AppState,
  Equipamento,
  EquipamentosOS,
  Fotos,
} from "../../redux/types";
import { useNavigation } from "@react-navigation/native";
import { SubTitle } from "../../components/SubTitleCurrentOS";
import { BlankContainer } from "../../components/BlankContainer";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { useRedux } from "../../hooks/state";
import { UpdateOS } from "../../redux/os-list/actions";
import { HandleImage } from "../../components/HandleImage";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { HandleAnotation } from "../../components/HandleAnotation";
import { InfosCurrentOS } from "../../components/InfosCurrentOS";
import { ChecklistCurrentOS } from "../../components/ChecklistCurrentOS";
import { ModalListaEquipamentos } from "../../components/ModalListaEquipamentos";
import { EquipmentsListCurrentOs } from "./../../components/EquipmentsListCurrentOS/index";


type Anotation = {
  nome: string;
  texto: string;
};

export function CurrentOS() {
  const [currentFoto, SetCurrentFoto] = useState<Fotos>({} as Fotos);
  const [currentAnotation, SetCurrentAnotation] = useState<Anotation>(
    {} as Anotation
  );
  const [visibleImageExtends, setVisibleImageExtends] = useState(false);
  const [visibleModalEquipamentos, setVisibleModalEquipamentos] =
    useState(false);
  const [visibleAnotation, setVisibleAnotation] = useState(false);
  const [newImage, setNewImage] = useState(false);
  const [indexCheckList, setIndexCheckList] = useState<number | undefined>();
  const OSaux = useSelector((state: AppState) => state.osList.currentOs);
  const [OS, setOS] = useState(OSaux);

  const statusDarkMode = useSelector(
    (state: AppState) => state.darkModeContextReducer
  );

  const navigation = useNavigation();
  const { user } = useAuth();
  const themes = statusDarkMode ? theme.colors_dark : theme.colors;

  function changeCheckListStatus(index: number, status: string) {
    if (OS.checkList) {
      OS.checkList[index].status = status;
      setOS({ ...OS, checkList: [...OS.checkList] });
    }
  }

  async function imagePickerCall(index: number) {
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
    console.log(data);

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
      nome: `${
        OS.checkList ? "Imagem " + OS.checkList[index].tarefa : "Imagem"
      }`,
      conteudo: `${data.uri}`,
    };
    SetCurrentFoto(imagem);
    setNewImage(true);
    setVisibleImageExtends(true);
    setIndexCheckList(index);
  }

  function addImage() {
    try {
      if (OS.checkList) {
        OS.checkList[indexCheckList ? indexCheckList : 0].fotos.push({
          id: String(Date.now()),
          conteudo: currentFoto.conteudo,
          nome: currentFoto.nome,
        });
        setOS({ ...OS, checkList: [...OS.checkList] });
      }
      closeModalImage();
    } catch (error) {
      alert(error);
    }
  }

  function removeImage() {
    try {
      if (OS.checkList) {
        let indexItemToRemove = OS.checkList[
          indexCheckList ? indexCheckList : 0
        ].fotos.findIndex((x) => x.id == currentFoto.id);
        OS.checkList[indexCheckList ? indexCheckList : 0].fotos.splice(
          indexItemToRemove,
          1
        );
        setOS({ ...OS, checkList: [...OS.checkList] });
      }
      closeModalImage();
    } catch (error) {
      alert(error);
    }
  }
  function addAnnotation(text: string) {
    try {
      if (OS.checkList) {
        OS.checkList[indexCheckList ? indexCheckList : 0].anotacao = text;
        setOS({ ...OS, checkList: [...OS.checkList] });
      }
      closeModalAnotation();
    } catch (error) {
      alert(error);
    }
  }

  function addEquipments(equipamentos: Equipamento[]) {
    try {
      const equipamentosOS = equipamentos.map((item) => {
        return {
          id: item.id,
          codigoEquipamento: item.codigoEquipamento,
          nomeEquipamento: item.nomeEquipamento,
          qtdEquipamento: 1,
        };
      });

      OS.equipamentos = equipamentosOS;
      setOS({ ...OS, equipamentos: [...OS.equipamentos] });

      closeModalEquipamentos();
    } catch (error) {
      alert(error);
    }
  }

  const closeModalImage = () => {
    setVisibleImageExtends(false);
    setNewImage(false);
    setIndexCheckList(undefined);
  };
  const closeModalAnotation = () => {
    setVisibleAnotation(false);
    setIndexCheckList(undefined);
  };
  const closeModalEquipamentos = () => {
    setVisibleModalEquipamentos(false);
  };

  return (
    <View style={styles.container}>
      <ModalListaEquipamentos
        visible={visibleModalEquipamentos}
        currentEquipments={OS.equipamentos}
        selectEquipments={addEquipments}
        closeModalEquipamentos={closeModalEquipamentos}
      ></ModalListaEquipamentos>
      <HandleImage
        indexCheckList={indexCheckList}
        id={currentFoto.id}
        conteudo={currentFoto.conteudo}
        nome={currentFoto.nome}
        visible={visibleImageExtends}
        closeModal={closeModalImage}
        addImage={addImage}
        newImage={newImage}
        removeImage={removeImage}
      />
      <HandleAnotation
        indexCheckList={indexCheckList}
        anotationText={currentAnotation.texto}
        visible={visibleAnotation}
        closeModalAnotation={closeModalAnotation}
        nome={currentAnotation.nome}
        newAnotation={addAnnotation}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            color={theme.colors.titleColor}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{OS.nomeOs}</Text>
        <TouchableOpacity>
          <Text style={styles.textButton}>Finalizar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar
        barStyle={
          themes.CurrentLinear1 != "#FFFFFF" ? "dark-content" : "light-content"
        }
        translucent
      />
      <ScrollView style={styles.container}>
        <View style={styles.wraper}>
          <InfosCurrentOS {...OS} />
          <ChecklistCurrentOS
            SetCurrentAnotation={SetCurrentAnotation}
            SetCurrentFoto={SetCurrentFoto}
            changeCheckListStatus={changeCheckListStatus}
            imagePickerCall={imagePickerCall}
            setVisibleAnotation={setVisibleAnotation}
            setVisibleImageExtends={setVisibleImageExtends}
            setIndexCheckList={setIndexCheckList}
            Os={OS}
          />

          <EquipmentsListCurrentOs
            Os={OS}
            setVisibleModalEquipamentos={setVisibleModalEquipamentos}
          />
        </View>
      </ScrollView>
    </View>
  );
}
