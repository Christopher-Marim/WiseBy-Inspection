import React, { useState, useEffect } from "react";
import { View, Alert, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import moment from 'moment';
import 'moment/locale/pt-br';
import { OrdemDeServico } from "../OS";
import { styles } from "./styles";

import { useSelector } from "react-redux";
import { AppState, OS } from "../../redux/types";

type ObjectList = {
  id: string;
  nomeOs: string;
  numeroOs: string;
  dataOs: string;
  tecnico: object;
  status: string;
};

export function ListaOs() {
  const [listaOrdenada, setListaOrdenada] = useState<OS[] | undefined>(
    undefined
  );

  const listaOs2 = useSelector((state:AppState) => state.osList.dataFiltred);

  useEffect(() => {
    let result: OS[] = listaOs2.sort((a, b) => {
      if (a.statusOs.toLowerCase() < b.statusOs.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });

    setListaOrdenada(result);
  });
  
  //const formatteddate = (data:string)=>
  //moment(data).locale('pt-br').format('DD/MM/YYYY');

  return (
    <View style={styles.container}>
      <FlatList
        data={listaOrdenada}
        keyExtractor={(item) => item?.id}
        renderItem={({ item: OS }) => (
          <View
            style={{
              padding: 5,
            }}
          >
            <OrdemDeServico
              key={OS.id}
              id={OS.id}
              equipamentos={OS.equipamentos}
              nomeOs={OS.nomeOs}
              numeroOs={OS.numeroOs}
              dataInicioPrevista={OS.dataInicioPrevista}
              dataFimPrevista={OS.dataFimPrevista}
              idTecnico={OS.idTecnico}
              statusOs={OS.statusOs}
            />
          </View>
        )}
      />
    </View>
  );
}
