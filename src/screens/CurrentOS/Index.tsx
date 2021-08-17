import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/types";
import { useNavigation } from "@react-navigation/native";
import { SubTitle } from "../../components/SubTitleCurrentOS";
import { BlankContainer } from "../../components/BlankContainer";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { useRedux } from "../../hooks/state";
import { UpdateOS } from "../../redux/os-list/actions";

export function CurrentOS() {
  const statusDarkMode = useSelector(
    (state: AppState) => state.darkModeContextReducer
  );
  const OSaux = useSelector((state: AppState) => state.osList.currentOs);
  const [OS, setOS] = useState(OSaux);

  const navigation = useNavigation();
  const { user } = useAuth();
  const themes = statusDarkMode ? theme.colors_dark : theme.colors;

  function changeCheckListStatus(index: number, status: string) {
    if (OS.checkList) {
      OS.checkList[index].status = status;
      setOS({ ...OS, checkList: [...OS.checkList] });
    }
  }

  return (
    <View style={styles.container}>
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
      <ScrollView style={styles.container}>
        <View style={styles.wraper}>
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
                style={[
                  styles.infoText,
                  { color: themes.gray, marginBottom: 0 },
                ]}
              >
                {OS.planta}
              </Text>
            </View>
          </BlankContainer>
          <SubTitle text={"CheckList"} />

          {OS.checkList?.map((checkList, index) => (
            <BlankContainer key={checkList.id}>
              <View key={checkList.id}>
                <Text style={styles.checkListTitle} key={checkList.id}>
                  {checkList.tarefa}
                </Text>
                <View style={styles.buttonGroup}>
                  <Button
                    name={"Conforme"}
                    color={
                      checkList.status.toLowerCase() == "conforme"
                        ? themes.buttonSelected
                        : themes.buttonNotSelected
                    }
                    fontColor={"white"}
                    onPress={() => {
                      changeCheckListStatus(index, "conforme");
                    }}
                  />
                  <Button
                    name={"Inconforme"}
                    color={
                      checkList.status.toLowerCase() == "inconforme"
                        ? themes.buttonSelected
                        : themes.buttonNotSelected
                    }
                    fontColor={"white"}
                    onPress={() => {
                      changeCheckListStatus(index, "inconforme");
                    }}
                  />
                  <Button
                    name={"N/A"}
                    color={
                      checkList.status.toLowerCase() == "n/a"
                        ? themes.buttonSelected
                        : themes.buttonNotSelected
                    }
                    fontColor={"white"}
                    onPress={() => {
                      changeCheckListStatus(index, "n/a");
                    }}
                  />
                </View>
                <ScrollView horizontal>
                  <View style={styles.wraperFotos}>
                    {/*Renderizar as fotos*/}
                    {OS.checkList &&
                      OS.checkList[index].fotos?.map((foto) => (
                        <TouchableOpacity key={foto.id} onPress={() =>console.warn(foto.id)}>
                          <Image
                            key={foto.id}
                            progressiveRenderingEnabled
                            fadeDuration={1000}
                            resizeMode={"cover"}
                            style={styles.stretch}
                            source={{
                              uri: `${foto.conteudo}`,
                            }}
                          />

                        </TouchableOpacity>
                      ))}
                  </View>
                </ScrollView>
              </View>
            </BlankContainer>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
