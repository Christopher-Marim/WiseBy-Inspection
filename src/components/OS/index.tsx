import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { AppState, OS } from "../../redux/types";
import { useDispatch, useSelector, useStore } from "react-redux";
import { setCurrentOs } from "../../redux/os-list/actions";
import { useNavigation } from "@react-navigation/native";
import { AppScreens } from "../../routes/types";
import { useAuth } from "../../hooks/auth";

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
  const navigation = useNavigation();

  function SetcurrentOs() {
    console.log(id);
    dispatch(setCurrentOs(id));
  }

  const {user} = useAuth()

  const statusDarkMode = useSelector((state:AppState) => state.darkModeContextReducer)
  const themes = statusDarkMode? theme.colors_dark : theme.colors
  

  return (
    <LinearGradient
      style={styles.container}
      colors={[themes.OSLiner1, themes.OSLiner2]}
    >
      <View style={styles.wrapper}>
        <Text numberOfLines={1} style={[styles.title, { color: themes.titleColor}]}>
          {nomeOs} {numeroOs}
        </Text>
        <Text numberOfLines={1} style={[styles.dateText, { color: themes.subFonts}]}>
          Técnico responsável: {user?.nome}
        </Text>
        <Text numberOfLines={1} style={[styles.dateText, { color: themes.subFonts}]}>
          {dataInicioPrevista} - {dataFimPrevista}
        </Text>
        <Text numberOfLines={1} style={[styles.statusText, { color: themes.titleColor}]}>
          {statusOs}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.buttons}>
        {statusOs.toLowerCase() == "pendente" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              SetcurrentOs(), navigation.navigate('CurrentOs');
            }}
          >
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
            <TouchableOpacity style={styles.button}
            onPress={() => {
              SetcurrentOs(), navigation.navigate('CurrentOs');
            }}>
              <Text style={[styles.buttonText, { color: themes.blue }]}>
                PREENCHER
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </LinearGradient>
  );
}
