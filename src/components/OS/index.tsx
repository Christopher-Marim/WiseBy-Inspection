import React from "react";

import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { AppState, OS } from "../../redux/types";
import { useDispatch, useSelector, useStore } from "react-redux";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import { useRedux } from "../../hooks/state";

export function OrdemDeServico({
  id,
  nomeOs,
  numeroOs,
  dataInicioPrevista,
  dataFimPrevista,
  idTecnico,
  statusOs,
}: OS) {
  const dispatch = useDispatch();
  const navigation: NavigationProp<any> = useNavigation();

  const { SetCurrentOs, ChangeStatusOs } = useRedux();

  const AlertOsOpen = () => {
    Alert.alert(
      "Iniciar ordem de serviço",
      "Deseja iniciar a ordem de serviço ou apenas visualizar",
      [
        {
          text: "Visualizar",
          onPress: () => {
            SetCurrentOs(id), navigation.navigate("CurrentOs");
          },
          style: "cancel",
        },
        {
          text: "Iniciar",
          onPress: () => {
            ChangeStatusOs(id, "Em andamento"),
              SetCurrentOs(id),
              navigation.navigate("CurrentOs");
          },
        },
      ]
    );
  };

  const { user } = useAuth();

  const statusDarkMode = useSelector(
    (state: AppState) => state.darkModeContextReducer
  );
  const themes = statusDarkMode ? theme.colors_dark : theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[themes.OSLiner1, themes.OSLiner2]}
    >
      <View style={styles.wrapper}>
        <Text
          numberOfLines={1}
          style={[styles.title, { color: themes.titleColor }]}
        >
          {nomeOs} {numeroOs}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.dateText, { color: themes.subFonts }]}
        >
          Técnico responsável: {user?.nome}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.dateText, { color: themes.subFonts }]}
        >
          {dataInicioPrevista} - {dataFimPrevista}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.statusText, { color: themes.titleColor }]}
        >
          {statusOs}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.buttons}>
        {statusOs.toLowerCase() == "pendente" && (
          <TouchableOpacity style={styles.button} onPress={AlertOsOpen}>
            <Text style={[styles.buttonText, { color: themes.green }]}>
              INICIAR
            </Text>
          </TouchableOpacity>
        )}
        {statusOs.toLowerCase() == "em andamento" && (
          <>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonText, { color: themes.red }]}>
                FINALIZAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                SetCurrentOs(id), navigation.navigate("CurrentOs");
              }}
            >
              <Text style={[styles.buttonText, { color: themes.blue }]}>
                PREENCHER
              </Text>
            </TouchableOpacity>
          </>
        )}
        {statusOs.toLowerCase() == "finalizado" && (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                SetCurrentOs(id), navigation.navigate("CurrentOs");
              }}
            >
              <Text style={[styles.buttonText, { color: themes.blue }]}>
                VISUALIZAR
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </LinearGradient>
  );
}
