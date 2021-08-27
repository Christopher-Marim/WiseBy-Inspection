import { variable } from "../../global/variables/commonsVariables";
import { AddOSAction, OSListAction, OSListState, RemoveOSAction, SearchFilterOSAction, SetCurrentOSAction, ToggleFilterOSAction, OS, ChangeStatusOSAction, UpdateOSAction, SetListOSAction } from "../types";
import { OS_LIST_ACTION_TYPES } from "./actions";


const {FINISHED_STATUS, PENDING_STATUS, INPROGRESS_STATUS} = variable.statusOs
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
          id: '1',
          tarefa: 'Limpar Cooler',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: [],
          anotacao:'',
          latitude: undefined,
          longitude: undefined
        }
      ],
      equipamentos:[],
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
          id: '1',
          tarefa: 'Limpar os pneus',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: [],
          latitude: undefined,
          longitude: undefined
        }
      ],
      equipamentos:[],
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
      equipamentos:[],
      checkList: [
        {
          id: '1',
          tarefa: 'Limpar a Sala',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: [
            {
              id: '1',
              nome:'Sala1',
              conteudo: 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/05/04124839/salaTV01.jpg'
            },
            {
              id: '2',
              conteudo: 'https://a-static.mlcdn.com.br/618x463/quadro-parede-decoracao-sala-cozinha-natureza-podium/lojapodium/paisagens364/9149bb11054ace5aab61ca7370406df3.jpg'
            },
            {
              id: '3',
              conteudo: 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/05/04124839/salaTV01.jpg'
            },
            {
              id: '4',
              conteudo: 'https://a-static.mlcdn.com.br/618x463/quadro-parede-decoracao-sala-cozinha-natureza-podium/lojapodium/paisagens364/9149bb11054ace5aab61ca7370406df3.jpg'
            },
            {
              id: '5',
              conteudo: 'https://a-static.mlcdn.com.br/618x463/quadro-parede-decoracao-sala-cozinha-natureza-podium/lojapodium/paisagens364/9149bb11054ace5aab61ca7370406df3.jpg'
            },
          ],
          latitude: undefined,
          longitude: undefined
        },
        {
          id: '2',
          tarefa: 'Limpar a Cozinha',
          status: 'Pendente',
          dataFim: undefined,
          dataInicio: undefined,
          fotos: [
            {
              id: '1',
              conteudo:'http://madesacms.vteximg.com.br/arquivos/ids/232340/01-GRRM310001D8-ambientado_result.jpg?v=637643692324330000'
            }
          ],
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
        if (filterFinish ? item.statusOs.toLowerCase() == FINISHED_STATUS.toLowerCase() : item.statusOs.toLowerCase() != FINISHED_STATUS.toLowerCase()) {
          return item;
        }
      })
      return { ...newState, dataFiltred: [...x] };
    }
    case OS_LIST_ACTION_TYPES.SEARCH_OS: {

      const { filter, filterFinish } = <SearchFilterOSAction>action;

      var x = newState.data.filter((item) => {
        if (filterFinish ? item.statusOs.toLowerCase() == FINISHED_STATUS.toLowerCase() : item.statusOs.toLowerCase() != FINISHED_STATUS.toLowerCase()) {
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

      const item = newState.dataFiltred[index]
      return { ...newState, currentOs: { ...item } };
    }
    case OS_LIST_ACTION_TYPES.CHANGE_STATUS_OS: {

      const { status, id } = <ChangeStatusOSAction>action;

      const index = newState.dataFiltred.findIndex((item) => item.id == id)
      
      newState.dataFiltred[index].statusOs = status
     
      return { ...newState, dataFiltred: [...newState.dataFiltred] };
    }
    case OS_LIST_ACTION_TYPES.UPDATE_OS: {

      const { id, osData} = <UpdateOSAction>action;

      const index1 = newState.data.findIndex((item) => item.id == id)
      const index2 = newState.dataFiltred.findIndex((item) => item.id == id)
      newState.data[index1] = osData
      newState.dataFiltred[index2] = osData
      return { ...newState, data: [...newState.data], dataFiltred:[...newState.dataFiltred], currentOs: osData };
    }
    case OS_LIST_ACTION_TYPES.SET_LIST_OS: {

      const {osData} = <SetListOSAction>action;
      return { ...newState, data: [...osData]};

    }
    default:
      return state;         
  }
}

export default osList;