import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { styles } from "./styles";

export type Company = {
  id: string;
  nomeEmpresa: string;
  systemUnitId: string;
};

type Props = {
  visible: boolean;
  companys: Company[];
  closeModalPicker(): void;
  selectCompany(company: Company): void;
};

export function ModalPickerCompany({
  visible,
  companys,
  closeModalPicker,
  selectCompany,
}: Props) {
  const [empresas, setEmpresas] = useState<Company[]>(companys);

  return (
    <Modal
      transparent
      style={styles.container}
      visible={visible}
      onRequestClose={closeModalPicker}
    >
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            closeModalPicker();
          }}
        ></TouchableOpacity>
        <View style={styles.wrapper2}>
          
        <Text style={styles.empresas}>Empresas</Text>
          <FlatList
          data={empresas}
          keyExtractor={(item)=>item?.id}
          renderItem={({item})=>(
            <TouchableOpacity
            onPress={()=>{selectCompany(item), closeModalPicker()}}
            style={styles.buttonCompany}
            >
              <Text>{item.nomeEmpresa}</Text>
            </TouchableOpacity>
          )}
          />


        </View>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            closeModalPicker();
          }}
        ></TouchableOpacity>
      </View>
    </Modal>
  );
}
