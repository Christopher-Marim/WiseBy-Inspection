import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
  Keyboard,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AppState, Equipamento, Fotos } from "../../redux/types";

import { Checkbox } from "react-native-paper";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { EquipamentoItem } from "../EquipamentoItem";

type Props = {
  visible: boolean;
  closeModalEquipamentos(): void;
};

export function ModalListaEquipamentos({
  visible,
  closeModalEquipamentos,
}: Props) {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [equipamentosSelecionados, setEquipamentosSelecionados] = useState<
    Equipamento[]
  >([]);
  const [equipamentosAux, setEquipamentosAux] = useState<Equipamento[]>([]);

  /* const textInputRef = useRef<TextInput>(null);

  const getFocusInput = () => {
    if (textInputRef && textInputRef.current) {
      textInputRef.current.focus();
    }
  }; */
  const response = useSelector((state: AppState) => state.EquipmentList.data);

  useEffect(() => {
    if (visible) {
      setEquipamentos(response);
      //setAnotation(anotationText)
      setTimeout(() => {
        //getFocusInput();
      }, 100);
    }
  }, [visible]);

  const itemSelecionado = (item: Equipamento) => {
    equipamentosSelecionados.push({ ...item });
    setEquipamentosSelecionados(equipamentosSelecionados);
  };

  function arraymove(item: Equipamento) {
    const fromIndex = equipamentos.findIndex(
      (equipamento) => equipamento.id == item.id
    );

    var element = equipamentos[fromIndex];
    equipamentos.splice(fromIndex, 1);
    equipamentos.splice(0, 0, element);
    setEquipamentos(equipamentos);
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false)
    }, 50);
  }

  return (
    <Modal
      style={styles.container}
      visible={visible}
      onRequestClose={closeModalEquipamentos}
    >
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TextInput placeholder="Buscar..." style={styles.textInput} />
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={equipamentos}
            extraData={refresh}
            renderItem={({ item }) => (
              <EquipamentoItem item={{ ...item }} itemSelecionado={arraymove} />
            )}
          />
        </View>
      </View>
    </Modal>
  );
}
