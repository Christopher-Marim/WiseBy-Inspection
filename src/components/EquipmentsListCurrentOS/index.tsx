import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { OS } from "../../redux/types";
import { BlankContainer } from "../BlankContainer";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SubTitle } from "../SubTitleCurrentOS";
import { theme } from "./../../global/styles/theme";
import { TextInput } from "react-native";
import { ButtonIconText } from "../ButtonIconText";

type Props = {
  setVisibleModalEquipamentos(condition: boolean): void;
  Os: OS;
};

export function EquipmentsListCurrentOs({
  setVisibleModalEquipamentos,
  Os: OS,
}: Props) {

  return (
    <View style={styles.container}>
      <SubTitle text={"Ferramentas Utilizadas"} />
      <BlankContainer>
        <View style={styles.containerEquipamentos}>
          {OS.equipamentos.length > 0 ? (
            <View style={styles.wrapperTitulo}>
              <Text>Código</Text>

              <Text>Descrição</Text>

              <Text>QTD</Text>
            </View>
          ) :  OS.statusOs.toLowerCase()=='em andamento' && (
            <ButtonIconText
              color={theme.colors.gray}
              nameIcon={"plus"}
              sizeIcon={30}
              style={[styles.buttonAdd, { width: "90%", padding: 10 }]}
              text={"ADICIONAR FERRAMENTA"}
              onPress={() => setVisibleModalEquipamentos(true)}
            />
          )}

          {OS.equipamentos.map((item) => (
            <View style={styles.wrapperEquipments} key={item.id}>
              <Text>{item.codigoEquipamento}</Text>
              <Text>{item.nomeEquipamento}</Text>
              <TextInput>{item.qtdEquipamento}</TextInput>
            </View>
          ))}

          {OS.equipamentos.length > 0 && OS.statusOs.toLowerCase()=='em andamento' && (
            <View style={{ paddingTop: 10 }}>
              <ButtonIconText
                color={theme.colors.gray}
                nameIcon={"plus"}
                sizeIcon={30}
                style={styles.buttonAdd}
                text={"ADICIONAR FERRAMENTA"}
                onPress={() => setVisibleModalEquipamentos(true)}
              />
            </View>
          )}
        </View>
      </BlankContainer>
    </View>
  );
}
