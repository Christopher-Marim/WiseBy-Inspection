import { AddOSAction, OSListAction, OSListState, RemoveOSAction, ToggleFilterOSAction } from "../types";
import { OS_LIST_ACTION_TYPES } from "./actions";

const initialState: OSListState = {
  data: [
    {
      id: "1",
      nomeOs: "Manutenção Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Em andamento",
    },
    {
      id: "2",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "3",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "4",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "5",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "6",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "7",
      nomeOs: "Manutenão Trator",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Em andamento",
    },
  ],
  dataFiltred:[],
  
}

const osList = (state: OSListState = initialState, action: OSListAction) => {
  const newState: OSListState = state;
  switch (action.type) {
    case OS_LIST_ACTION_TYPES.ADD_OS:

      const { osData } = <AddOSAction>action;
      return {
        ...newState, data: { ...newState.data, osData }
      };

    case OS_LIST_ACTION_TYPES.REMOVE_OS:

      const { index } = <RemoveOSAction>action;
      newState.data.splice(index, 1);
      return { ...newState };

    case OS_LIST_ACTION_TYPES.FILTER_OS:

      const { filter } = <ToggleFilterOSAction>action;

      var x =newState.data.filter((item) => {
        if (item.status.toLowerCase() == filter.toLowerCase()) {
          return item;
        }})
        return { ...newState, dataFiltred:[...x]};

        default:
      return state;
  }
}

export default osList;