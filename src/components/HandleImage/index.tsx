import React, { useState } from "react";
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fotos } from "../../redux/types";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = Fotos & {
  indexCheckList?:number
  visible: boolean;
  closeModal(): void;
  addImage(): void;
  removeImage():void
  newImage?:boolean
};

export function HandleImage({ id, conteudo, visible, nome,newImage,closeModal,addImage,removeImage}: Props) {

  const [StateOrientation, setStateOrientation] = useState<{ orientation: string }>();

  const isPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };
  //Ficar escutando se a tela está 'deitada' ou em 'pé'
  Dimensions.addEventListener("change", () => {
    setStateOrientation({
      orientation: isPortrait() ? "portrait" : "landscape",
    });
  });

  return (
    <Modal 
    style={styles.container} 
    visible={visible}
    onRequestClose={closeModal}
    >
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.nomeImage}>{nome ? nome : "Imagem"}</Text>
          <TouchableOpacity style={styles.buttonClose} onPress={closeModal}>
            <AntDesign name={"close"} color="white" size={40} />
          </TouchableOpacity>
        </View>
        <Image
          progressiveRenderingEnabled
          resizeMode={
            StateOrientation?.orientation == "landscape" ? "stretch" : "contain"
          }
          style={[
            styles.stretch,
            {
              height:
                StateOrientation?.orientation == "landscape" ? "70%" : "80%",
            },
          ]}
          source={{
            uri: `${conteudo}`,
          }}
        />
        <View style={styles.buttons}>
          {newImage?(
            <TouchableOpacity
             onPress={addImage}
             style={[styles.button, {backgroundColor: theme.colors.buttonSelected}]}>
            <Text>Adicionar Imagem</Text>
          </TouchableOpacity>
          ):(
          <TouchableOpacity 
          onPress={removeImage}
          style={[styles.button, {backgroundColor: theme.colors.red}]}>
            <Text>Remover</Text>
          </TouchableOpacity>
          )}
          
        </View>
      </View>
    </Modal>
  );
}
