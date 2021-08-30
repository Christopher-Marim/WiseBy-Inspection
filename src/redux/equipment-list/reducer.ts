import { EquipamentoListAction, EquipamentoListState } from "../types";
import { OS_LIST_ACTION_TYPES } from "./actions";

const initialState: EquipamentoListState = {
  data: [
    {
      id:'1',
      codigoEquipamento:'15006',
      nomeEquipamento:'Chave de Fenda',
    },
    {
      id:'2',
      codigoEquipamento:'15007',
      nomeEquipamento:'Chave Filips',
    },
    {
      id:'3',
      codigoEquipamento:'15008',
      nomeEquipamento:'Furadeira'
    },
    {
      id:'4',
      codigoEquipamento:'15006',
      nomeEquipamento:'Chave de Fenda',
    },
    {
      id:'5',
      codigoEquipamento:'15007',
      nomeEquipamento:'Chave Filips',
    },
    {
      id:'6',
      codigoEquipamento:'15008',
      nomeEquipamento:'Furadeira'
    },
    {
      id:'7',
      codigoEquipamento:'15006',
      nomeEquipamento:'Chave de Fenda',
    },
    {
      id:'8',
      codigoEquipamento:'15007',
      nomeEquipamento:'Chave Filips',
    },
    {
      id:'9',
      codigoEquipamento:'15008',
      nomeEquipamento:'Furadeira'
    },
    {
      id:'10',
      codigoEquipamento:'15006',
      nomeEquipamento:'Chave de Fenda',
    },
    {
      id:'11',
      codigoEquipamento:'15007',
      nomeEquipamento:'Chave Filips',
    },
    {
      id:'12',
      codigoEquipamento:'15008',
      nomeEquipamento:'Tinta'
    },
  ],
  dataFiltred:[]

}

const EquipmentList = (state: EquipamentoListState = initialState, action: EquipamentoListAction) => {
  const newState: EquipamentoListState = state;
  switch (action.type) {
  
    default:
      return state;
  }
}

export default EquipmentList;