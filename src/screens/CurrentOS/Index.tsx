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
import { AppState, Fotos } from "../../redux/types";
import { useNavigation } from "@react-navigation/native";
import { SubTitle } from "../../components/SubTitleCurrentOS";
import { BlankContainer } from "../../components/BlankContainer";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { useRedux } from "../../hooks/state";
import { UpdateOS } from "../../redux/os-list/actions";
import { HandleImage } from "../../components/HandleImage";

import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { HandleAnotation } from "../../components/HandleAnotation";

type Anotation = {
  nome: string,
  texto:string
}

export function CurrentOS() {
  const [currentFoto, SetCurrentFoto] = useState<Fotos>({} as Fotos);
  const [currentAnotation, SetCurrentAnotation] = useState<Anotation>({} as Anotation);
  const [visibleImageExtends, setVisibleImageExtends] = useState(false);
  const [visibleAnotation, setVisibleAnotation] = useState(false);
  const [newImage, setNewImage] = useState(false);
  const [indexCheckList, setIndexCheckList] = useState<number|undefined>();
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

 async function imagePickerCall(index:number) {
    if(Constants.platform?.ios){
      const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)

      if(status != 'granted'){
        Alert.alert('Não autorizado', 'Nós precisamos de autorização para prosseguir')
        return
      }
    }
    const data = await  ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images
    })
    console.log(data)

    if(data.cancelled){
      Alert.alert('Operação cancelada')
      return
    }
    if(!data.cancelled && data.uri.length ==0){ 
      Alert.alert('Imagem não processada')
      return
    }

    const imagem = {
        id:'null',
        nome:`${OS.checkList? 'Imagem '+ OS.checkList[index].tarefa: 'Imagem'}`,
        conteudo:`${data.uri}`
    }
    SetCurrentFoto(imagem)
    setNewImage(true)
    setVisibleImageExtends(true);
    setIndexCheckList(index)

  }

  function addImage(){
    try {
      if(OS.checkList ){
        OS.checkList[indexCheckList?indexCheckList:0].fotos.push({
          id:String(Date.now()),
          conteudo:currentFoto.conteudo,
          nome:currentFoto.nome
        })
        setOS({...OS, checkList:[...OS.checkList]})
      }
      closeModalImage()
    } catch (error) {
      alert(error)
    }
  }

  function removeImage(){
    try {
      if(OS.checkList ){
        let indexItemToRemove = OS.checkList[indexCheckList?indexCheckList:0].fotos.findIndex(
          (x) => x.id == currentFoto.id
        );
        OS.checkList[indexCheckList?indexCheckList:0].fotos.splice(indexItemToRemove,1)
        setOS({...OS, checkList:[...OS.checkList]})
      }
      closeModalImage()
    } catch (error) {
      alert(error)
    }
  }
  function addAnnotation(text:string){
    try {
      if(OS.checkList ){
        OS.checkList[indexCheckList?indexCheckList:0].anotacao = text
        setOS({...OS, checkList:[...OS.checkList]})
      }
      closeModalAnotation()
    } catch (error) {
      alert(error)
    }
  }

  const handleClickImage = (Foto: Fotos, visible: boolean) => {
    SetCurrentFoto(Foto);
    setVisibleImageExtends(visible);
  };
  const closeModalImage = () => {
    setVisibleImageExtends(false);
    setNewImage(false)
    setIndexCheckList(undefined)
  };
  const closeModalAnotation = () => {
    setVisibleAnotation(false);
    setIndexCheckList(undefined)
    
  };

  return (
    <View style={styles.container}>
      <HandleImage
        indexCheckList={indexCheckList}
        id={currentFoto.id}
        conteudo={currentFoto.conteudo}
        nome={currentFoto.nome}
        visible={visibleImageExtends}
        closeModal={() => closeModalImage()}
        addImage={()=>addImage()}
        newImage={newImage}
        removeImage={()=>removeImage()}
      />
      <HandleAnotation
        indexCheckList={indexCheckList}
        anotationText={currentAnotation.texto}
        visible={visibleAnotation}
        closeModalAnotation={closeModalAnotation}
        nome={currentAnotation.nome}
        newAnotation={(text)=>addAnnotation(text)}
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
            themes.CurrentLinear1 != "#FFFFFF"
              ? "dark-content"
              : "light-content"
          }
          translucent
        />
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
                <ScrollView
                showsHorizontalScrollIndicator={false}
                 horizontal>
                  <View style={styles.wraperFotos}>
                    {/*Renderizar as fotos*/}
                    {OS.checkList &&
                      OS.checkList[index].fotos?.map((foto) => (
                        <TouchableOpacity
                          key={foto.id}
                          onPress={() => {handleClickImage(foto, true), setIndexCheckList(index)}}
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
                <View style={{width:'100%', alignItems:'flex-end', paddingHorizontal:15}}>
                <Text style={{color:themes.gray}}>{OS.checkList? OS.checkList[index].fotos.length+'/5':''}</Text>
                </View>
                <View
                  style={[
                    styles.buttonsCheckList,
                    { borderColor: themes.gray },
                  ]}
                >
                  <TouchableOpacity
                  onPress={() =>{
                    setIndexCheckList(index)
                    if(OS.checkList){
                      const annotation= OS.checkList[index].anotacao
                      SetCurrentAnotation({
                        nome:` Anotação de ${OS.checkList[index].tarefa}`,
                        texto:annotation?annotation:''
                      })
                      setVisibleAnotation(true)
                    }
                      
                  }}
                   style={styles.buttonCheckList}>
                    <MaterialCommunityIcons
                      name={"clipboard-text"}
                      color={themes.gray}
                      size={35}
                    />
                    <Text
                      style={[
                        styles.textButtonCheckList,
                        { color: themes.gray },
                      ]}
                    >
                      ANOTAÇÕES
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{
                    if(OS.checkList)
                    if(OS.checkList[index].fotos.length <5){
                      imagePickerCall(index)
                    }
                    else{
                      Alert.alert('Limite de fotos atingido', 'O limite de fotos é 5')
                    }
                  }
                  } 
                  style={styles.buttonCheckList}>
                    <MaterialCommunityIcons
                      name={"camera-plus"}
                      color={themes.gray}
                      size={35}
                    />
                    <Text
                      style={[
                        styles.textButtonCheckList,
                        { color: themes.gray },
                      ]}
                    >
                      FOTOS
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BlankContainer>
          ))}
          <SubTitle text={"Ferramentas Utilizadas"}/>
          <BlankContainer>
            <View>

            </View>
          </BlankContainer>
        </View>
      </ScrollView>
    </View>
  );
}
