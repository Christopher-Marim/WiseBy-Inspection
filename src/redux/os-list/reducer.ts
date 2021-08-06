import { AddOSAction, OSListAction, OSListState, RemoveOSAction, SearchFilterOSAction, ToggleFilterOSAction } from "../types";
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
      nomeOs: "Limpar Piso",
      numeroOs: "15005",
      dataOs: "15/09/2022 - 26/05/2023",
      tecnico: { nome: "Christopher", systemUserId: "1", systemUnitId: "1" },
      status: "Pendente",
    },
    {
      id: "3",
      nomeOs: "Trator",
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
      nomeOs: "Varrer casa",
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
  dataFiltred: [],

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

    case OS_LIST_ACTION_TYPES.FILTER_OS: { 

      const { filter } = <ToggleFilterOSAction>action;

      var x = newState.data.filter((item) => {
        if (item.status.toLowerCase() == filter.toLowerCase()) {
          return item;
        }
      })
      return { ...newState, dataFiltred: [...x] };
    }
    case OS_LIST_ACTION_TYPES.SEARCH_OS: {

      const { filter, status } = <SearchFilterOSAction>action; 

      var x = newState.data.filter((item) => { 
        if (item.status.toLowerCase() == status.toLowerCase()) { 
          if ( 
            RegExp(filter.toLowerCase()).test(item.nomeOs.toLowerCase()) || 
            RegExp(filter.toLowerCase()).test(item.numeroOs.toLowerCase()) || 
            RegExp(filter.toLowerCase()).test(item.tecnico.nome.toLowerCase())) { 
            console.log(item) 
            return item; 
          } 
        } 
      }) 
      return { ...newState, dataFiltred: [...x] }; 
    }
    default:
      return state;
  }
}

export default osList;