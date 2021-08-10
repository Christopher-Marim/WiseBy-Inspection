import { AddOSAction, OSListAction, OSListState, RemoveOSAction, SearchFilterOSAction, SetCurrentOSAction, ToggleFilterOSAction, OS } from "../types";
import { OS_LIST_ACTION_TYPES } from "./actions";

const initialState: OSListState = {
  data: [
    {
      id: '1',
      idTecnico: '1',
      nomeOs: 'Limpar o Computador',
      numeroOs: '160523',
      planta: 'Na casa',
      statusOs: 'Pendente',
      dataInicioPrevista: '05/08/2020',
      dataFimPrevista: '16/08/2021',
      dataInicioTecnico: undefined,
      dataFimTecnico: undefined,
      checkList: [
        {
          tarefa: 'Limpar Cooler',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: undefined,
          latitude: undefined,
          longitude: undefined
        }
      ],
      latitude: undefined,
      longitude: undefined,
      assinatura: undefined
    },
    {
      id: '2',
      idTecnico: '1',
      nomeOs: 'Limpar a moto',
      numeroOs: '120923',
      planta: 'Na casa',
      statusOs: 'Pendente',
      dataInicioPrevista: '05/08/2020',
      dataFimPrevista: '16/08/2021',
      dataInicioTecnico: undefined,
      dataFimTecnico: undefined,
      checkList: [
        {
          tarefa: 'Limpar os pneus',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: undefined,
          latitude: undefined,
          longitude: undefined
        }
      ],
      latitude: undefined,
      longitude: undefined,
      assinatura: undefined
    },
    {
      id: '3',
      idTecnico: '1',
      nomeOs: 'Limpar a Casa',
      numeroOs: '150528',
      planta: 'Na casa',
      statusOs: 'Pendente',
      dataInicioPrevista: '05/08/2020',
      dataFimPrevista: '16/08/2021',
      dataInicioTecnico: undefined,
      dataFimTecnico: undefined,
      checkList: [
        {
          tarefa: 'Limpar a Sala',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: undefined,
          latitude: undefined,
          longitude: undefined
        },
        {
          tarefa: 'Limpar a Cozinha',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: undefined,
          latitude: undefined,
          longitude: undefined
        }
      ],
      latitude: undefined,
      longitude: undefined,
      assinatura: undefined
    },
  ],
  dataFiltred: [],
  currentOs: <OS>{}
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

      const { filterFinish } = <ToggleFilterOSAction>action;
      var x = newState.data.filter((item) => {
        if (filterFinish ? item.statusOs.toLowerCase() == 'finalizado' : item.statusOs.toLowerCase() != 'finalizado') {
          return item;
        }
      })
      return { ...newState, dataFiltred: [...x] };
    }
    case OS_LIST_ACTION_TYPES.SEARCH_OS: {

      const { filter, filterFinish } = <SearchFilterOSAction>action;

      var x = newState.data.filter((item) => {
        if (filterFinish ? item.statusOs.toLowerCase() == 'finalizado' : item.statusOs.toLowerCase() != 'finalizado') {
          if (
            RegExp(filter.toLowerCase()).test(item.nomeOs.toLowerCase()) ||
            RegExp(filter.toLowerCase()).test(item.numeroOs.toLowerCase())) {
            console.log(item)
            return item;
          }
        }
      })
      return { ...newState, dataFiltred: [...x] };
    }

    case OS_LIST_ACTION_TYPES.SET_CURRENT_OS: {

      const { id } = <SetCurrentOSAction>action;

      const index = newState.dataFiltred.findIndex((item) => item.id == id)
      console.log('item: ' + newState.dataFiltred[index].id)
      const item = newState.dataFiltred[index]
      return { ...newState, currentOs: { ...item } };
    }
    default:
      return state;
  }
}

export default osList;