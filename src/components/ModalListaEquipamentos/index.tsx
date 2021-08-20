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

  const [equipamentosAux, setEquipamentosAux] = useState<Equipamento[]>([]);

  const response = useSelector((state: AppState) => state.EquipmentList.data);

  useEffect(() => {
    if (visible) {
      setEquipamentos(response);
      setEquipamentosAux(response);
    }
  }, [visible]);

  //quando um item é selecionado, faz-se a busca do index dele para reposicionar ele no inicio do array
  function arraymove(item: Equipamento) {
    
    const fromIndex = equipamentos.findIndex(
      (equipamento) => equipamento.id == item.id
    );

    equipamentos.splice(fromIndex, 1);
    equipamentos.splice(item.selecionado?0:fromIndex, 0, item);

    setEquipamentosAux(equipamentos);
    setEquipamentos(equipamentos);

    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 50);
  }

  function filterEquipments(text: string) {
    var equipamentosFiltrados = equipamentosAux.filter((item) => {
      if (
        RegExp(text.toLowerCase()).test(item.nomeEquipamento.toLowerCase()) ||
        RegExp(text.toLowerCase()).test(item.codigoEquipamento.toLowerCase())
      ) {
        return item;
      }
    });

    setEquipamentos(equipamentosFiltrados);
  }

  return (
    <Modal
      style={styles.container}
      visible={visible}
      onRequestClose={closeModalEquipamentos}
    >
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TextInput
            onChangeText={(text) => filterEquipments(text)}
            placeholder="Buscar..."
            style={styles.textInput}
          />
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
