import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { AppState, Fotos, OS } from "../../redux/types";
import { BlankContainer } from "../BlankContainer";
import { Button } from "../Button";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SubTitle } from "../SubTitleCurrentOS";
import { ButtonIconText } from "../ButtonIconText";
import { variable } from "../../global/variables/commonsVariables";

type Anotation = {
  nome: string;
  texto: string;
};

type Props = {
  setVisibleImageExtends(condition: boolean): void;
  setVisibleAnotation(condition: boolean): void;
  changeCheckListStatus(index: number, text: string): void;
  SetCurrentFoto(Foto: Fotos): void;
  SetCurrentAnotation(anotation: Anotation): void;
  imagePickerCall(index: number): void;
  setIndexCheckList(index: number): void;
  alertStatus():void
  Os: OS;
};

export function ChecklistCurrentOS({
  setVisibleImageExtends,
  changeCheckListStatus,
  SetCurrentFoto,
  SetCurrentAnotation,
  imagePickerCall,
  setVisibleAnotation,
  setIndexCheckList,
  alertStatus,
  Os,
}: Props) {
  const statusDarkMode = useSelector(
    (state: AppState) => state.darkModeContextReducer
  );

  const themes = statusDarkMode ? theme.colors_dark : theme.colors;
  
  const {FINISHED_STATUS, PENDING_STATUS, INPROGRESS_STATUS} = variable.statusOs

  const [OS, setOS] = useState(Os);
  const { user } = useAuth();

  const handleClickImage = (Foto: Fotos, visible: boolean) => {
    SetCurrentFoto(Foto);
    setVisibleImageExtends(visible);
  };

    function changeStatusButton(index:number, status:string){
    if (OS.statusOs.toLowerCase() == INPROGRESS_STATUS.toLowerCase()) {
      changeCheckListStatus(index, status);
    } else {
      alertStatus()
    }
  }

  return (
    <View style={styles.container}>
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
                  changeStatusButton(index, "conforme")  
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
                  changeStatusButton(index, "inconforme");
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
                  changeStatusButton(index, "n/a");
                }}
              />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <View style={styles.wraperFotos}>
                {/*Renderizar as fotos*/}
                {OS.checkList &&
                  OS.checkList[index].fotos?.map((foto) => (
                    <TouchableOpacity
                      key={foto.id}
                      onPress={() => {
                        handleClickImage(foto, true), setIndexCheckList(index);
                      }}
                    >
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
            <View
              style={{
                width: "100%",
                alignItems: "flex-end",
                paddingHorizontal: 15,
              }}
            >
              <Text style={{ color: themes.gray }}>
                {OS.checkList ? OS.checkList[index].fotos.length + "/5" : ""}
              </Text>
            </View>
            <View
              style={[styles.buttonsCheckList, { borderColor: themes.gray }]}
            >
              <ButtonIconText
                color={themes.gray}
                nameIcon={"clipboard-text"}
                sizeIcon={35}
                text={"ANOTAÇÕES"}
                style={styles.buttonCheckList}
                onPress={() => {
                  setIndexCheckList(index);
                  if (OS.checkList) {
                    const annotation = OS.checkList[index].anotacao;
                    SetCurrentAnotation({
                      nome: ` Anotação de ${OS.checkList[index].tarefa}`,
                      texto: annotation ? annotation : "",
                    });
                    setVisibleAnotation(true);
                  }
                }}
              />

              <ButtonIconText
                color={themes.gray}
                nameIcon={"camera-plus"}
                sizeIcon={35}
                text={"FOTOS"}
                style={styles.buttonCheckList}
                onPress={() => {
                  if (OS.checkList)
                  if(OS.statusOs.toLowerCase()==INPROGRESS_STATUS.toLowerCase()){
                    if (OS.checkList[index].fotos.length < 5) {
                      imagePickerCall(index);
                    } else {
                      Alert.alert(
                        "Limite de fotos atingido",
                        "O limite de fotos é 5"
                      );
                    }
                  }
                  else{
                    alertStatus();
                  }
                }}
              />
            </View>
          </View>
        </BlankContainer>
      ))}
    </View>
  );
}
