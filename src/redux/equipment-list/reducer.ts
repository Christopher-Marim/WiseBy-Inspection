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