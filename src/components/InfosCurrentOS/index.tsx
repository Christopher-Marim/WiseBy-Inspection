import React, { useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { AppState, OS } from "../../redux/types";
import { BlankContainer } from "../BlankContainer";
import { SubTitle } from "../SubTitleCurrentOS";
import { styles } from "./styles";

export function InfosCurrentOS(Os: OS) {
  const statusDarkMode = useSelector(
    (state: AppState) => state.darkModeContextReducer
  );

  const themes = statusDarkMode ? theme.colors_dark : theme.colors;

  const [OS, setOS] = useState(Os);
  const { user } = useAuth();

  return (
    <>
      <SubTitle text={"Informações da Inspeção"} />
      <BlankContainer>
        <View>
          <Text style={styles.infoTitle}>Número OS</Text>
          <Text style={[styles.infoText, { color: themes.gray }]}>
            {OS.numeroOs}
          </Text>
          <Text style={styles.infoTitle}>Data da ordem de serviço</Text>
          <Text style={[styles.infoText, { color: themes.gray }]}>
            {OS.dataInicioPrevista} - {OS.dataFimPrevista}
          </Text>
          <Text style={styles.infoTitle}>Responsavel</Text>
          <Text style={[styles.infoText, { color: themes.gray }]}>
            {user?.nome}
          </Text>
          <Text style={styles.infoTitle}>Planta</Text>
          <Text
            style={[styles.infoText, { color: themes.gray, marginBottom: 0 }]}
          >
            {OS.planta}
          </Text>
        </View>
      </BlankContainer>
    </>
  );
}
