import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Responsavel = {
  nome: string;
  systemUserId: string;
  systemUnitId: string;
};

type Props = {
  nomeOs: string;
  numeroOs: string;
  dataOs: string;
  tecnico: Responsavel;
  status: string;
};

export function OrdemDeServico({
  nomeOs,
  numeroOs,
  dataOs,
  tecnico,
  status,
}: Props) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.OSLiner1, theme.colors.OSLiner2]}
    >
      <View style={styles.wrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {nomeOs} {numeroOs}
        </Text>
        <Text numberOfLines={1} style={styles.dateText}>
          Técnico responsável: {tecnico.nome}
        </Text>
        <Text numberOfLines={1} style={styles.dateText}>
          {dataOs}
        </Text>
        <Text numberOfLines={1} style={styles.statusText}>
          {status}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.buttons}>
        {status.toLowerCase() == "pendente" && (
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.buttonText, { color: theme.colors.green }]}>
              INICIAR
            </Text>
          </TouchableOpacity>
        )}
        {status.toLowerCase() == "em andamento" && (
          <>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonText, { color: theme.colors.red }]}>
                FINALIZAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.buttonText, { color: theme.colors.blue }]}>
                PREENCHER
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </LinearGradient>
  );
}
