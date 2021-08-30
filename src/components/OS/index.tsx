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
import { variable } from "../../../commonsVariables";

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
  const {FINISHED_STATUS, PENDING_STATUS, INPROGRESS_STATUS} = variable.statusOs

  const { SetCurrentOs, ChangeStatusOs } = useRedux();

  const AlertOsOpen = () => {
    Alert.alert(
      "Iniciar ordem de serviço",
      "Deseja iniciar a ordem de serviço?",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Iniciar",
          onPress: () => {
            ChangeStatusOs(id, INPROGRESS_STATUS),
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
        {statusOs.toLowerCase() == PENDING_STATUS.toLowerCase() && (
          <>
          <TouchableOpacity style={styles.button} onPress={AlertOsOpen}>
            <Text style={[styles.buttonText, { color: themes.green }]}>
              INICIAR
            </Text>
          </TouchableOpacity>
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
        {statusOs.toLowerCase() == INPROGRESS_STATUS.toLowerCase() && (
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
        {statusOs.toLowerCase() == FINISHED_STATUS.toLowerCase() && (
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
