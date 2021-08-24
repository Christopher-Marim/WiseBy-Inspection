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
import {
  AppState,
  Equipamento,
  EquipamentosOS,
  Fotos,
} from "../../redux/types";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { EquipamentoItem } from "../EquipamentoItem";
import { Loader } from "../Loader";

type Props = {
  visible: boolean;
  currentEquipments?: EquipamentosOS[];
  closeModalEquipamentos(): void;
  selectEquipments(equipamentos: Equipamento[]): void;
};

export function ModalListaEquipamentos({
  visible,
  currentEquipments,
  closeModalEquipamentos,
  selectEquipments,
}: Props) {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
  const [textInput, setTextInput] = useState("");
  const [refresh, setRefresh] = useState(false);

  const [equipamentosAux, setEquipamentosAux] = useState<Equipamento[]>([]);

  var response = useSelector((state: AppState) => state.EquipmentList.data);

  useEffect(() => {
    if (visible) {
      //reseta o estado dos itens para selecionado = false
      response.map((item) => {
        if (item.selecionado) {
          item.selecionado = false;
        }
        return item;
      });

      if (currentEquipments) {
       currentEquipments.map((item) => {
        response.map((element) => {
            if (element.id == item.id) {
              element.selecionado = true;
              arraymove(element)
            }
          });
        });
      }

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
    equipamentos.splice(item.selecionado ? 0 : fromIndex, 0, item);

    setEquipamentosAux(equipamentos);
    setEquipamentos(equipamentos);
    setTextInput("");

    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 50);
  }

  function filterEquipments(text: string) {
    var equipamentosAux = equipamentos;
    var equipamentosFiltrados = equipamentosAux.filter((item) => {
      if (
        RegExp(text.toLowerCase()).test(item.nomeEquipamento.toLowerCase()) ||
        RegExp(text.toLowerCase()).test(item.codigoEquipamento.toLowerCase())
      ) {
        return item;
      }
    });

    setEquipamentosAux(equipamentosFiltrados);
  }

  function AddEquipments() {
    const itens = equipamentosAux.filter((item) => item.selecionado);
    selectEquipments(itens);
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
            value={textInput}
            onChangeText={(text) => {
              setTextInput(text), filterEquipments(text);
            }}
            placeholder="Buscar..."
            style={styles.textInput}
          />
          <TouchableOpacity onPress={AddEquipments} style={styles.button}>
            <MaterialCommunityIcons name={"plus"} size={40} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={equipamentosAux}
            extraData={refresh}
            renderItem={({ item }) => (
              <EquipamentoItem item={{ ...item }} itemSelecionado={arraymove} />
            )}
          />
        </View>
      </View>
      {equipamentos.length == 0 && <Loader />}
    </Modal>
  );
}
