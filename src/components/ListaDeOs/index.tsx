import React, { useState, useEffect } from "react";
import { View, Alert, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { OrdemDeServico } from "../OS";
import { styles } from "./styles";

import { useSelector } from "react-redux";
import { AppState } from "../../redux/types";

type ObjectList = {
  id: string;
  nomeOs: string;
  numeroOs: string;
  dataOs: string;
  tecnico: object;
  status: string;
};

export function ListaOs() {
  const [listaOrdenada, setListaOrdenada] = useState<ObjectList[] | undefined>(
    undefined
  );

  const listaOs2 = useSelector((state:AppState) => state.osList.dataFiltred);

  useEffect(() => {
    let result: ObjectList[] = listaOs.sort((a, b) => {
      if (a.status.toLowerCase() < b.status.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });

    setListaOrdenada(result);
  }, []);
  const listaOs = [
    {
      id: "2",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", SystemUserId: "1", SystemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "3",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", SystemUserId: "1", SystemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "4",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", SystemUserId: "1", SystemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "5",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", SystemUserId: "1", SystemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "6",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", SystemUserId: "1", SystemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "7",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", SystemUserId: "1", SystemUnitId: "1" },
      status: "Em andamento",
    },
  ];

  function filtroLista(filter: string) {
    var listaOrdenadax = listaOs.filter((item) => {
      if (item.status.toLowerCase() == filter.toLowerCase()) {
        return item;
      }
    });
    setListaOrdenada(listaOrdenadax);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listaOs2}
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
              nomeOs={OS.nomeOs}
              numeroOs={OS.numeroOs}
              dataOs={OS.dataOs}
              tecnico={OS.tecnico}
              status={OS.status}
            />
          </View>
        )}
      />
    </View>
  );
}
