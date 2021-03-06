import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fotos } from "../../redux/types";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  nome: String;
  indexCheckList?: number;
  visible: boolean;
  anotationText:string
  closeModalAnotation(): void;
  newAnotation(text:string): void;
};


export function HandleAnotation({
  visible,
  nome,
  anotationText,
  closeModalAnotation,
  newAnotation,
}: Props) {
  const [anotation, setAnotation] = useState('');
  const textInputRef = useRef<TextInput>(null);

  const getFocusInput = () => {
    if (textInputRef && textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  useEffect(() => {
    if(visible){
      setAnotation(anotationText)
      setTimeout(() => {
        getFocusInput();
      }, 100);
    }
  },[visible])

  return (
    <Modal
      style={styles.container}
      visible={visible}
      onRequestClose={closeModalAnotation}
    >
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.nomeAnotation}>{nome?nome:'Anotação'}</Text>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={closeModalAnotation}
          >
            <AntDesign name={"close"} color="black" size={40} />
          </TouchableOpacity>
        </View>
        <TextInput
        ref={textInputRef}
        style={styles.textInput}
        value={anotation}
        onChangeText={(text)=>setAnotation(text)}
        multiline 
        textAlignVertical={'top'}
         />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={()=>{newAnotation(anotation),setAnotation('')}}
            style={[
              styles.button,
              { backgroundColor: theme.colors.buttonSelected },
            ]}
          >
            <Text style={{color:'white'}}>Salvar Anotação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
