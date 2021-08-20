
import { OS_LIST_ACTION_TYPES } from "./os-list/actions";

export type AppState = {
  osList: OSListState,
  darkModeContextReducer:boolean,
  EquipmentList:EquipamentoListState
}

export type Responsavel = {
  nome: string;
  systemUserId: string;
  systemUnitId: string;
};

export type Fotos = {
id:string
nome?:string,
conteudo:string,
}

export type CheckList = 
{
  id:string
  tarefa:string,
  status:string,
  fotos:Fotos[],
  anotacao?:string
  dataInicio?:string,
  dataFim?:string,
  latitude?:string,
  longitude?: string,
  }

export type OS = {
  
    id:string,
    idTecnico:string,
    nomeOs:string,
    numeroOs:string,
    planta?:string,
    statusOs:string,
    dataInicioPrevista:string,
    dataFimPrevista:string,
    dataInicioTecnico?:string,
    dataFimTecnico?:string,
    checkList?:CheckList[],
    equipamentos:EquipamentosOS[],
    latitude?:string,
    longitude?: string,
    assinatura?: string
    
}

export type OSListState = {
  data: OS[],
  dataFiltred: OS[],
  currentOs:OS,
};

export type AddOSAction = {
  type: string;
  osData: OS;
}
export type UpdateOSAction = {
  type: string;
  id: string;
  osData: OS;
}
export type RemoveOSAction = {
  type: string;
  index: number;
}
export type ToggleFilterOSAction = {
  type: string;
  filterFinish: boolean;
}

export type SearchFilterOSAction = {
  type: string;
  filter: string;
  filterFinish: boolean;
}
export type SetCurrentOSAction = {
  type: string;
  id:string
}
export type ChangeStatusOSAction = {
  type: string;
  id:string,
  status:string
}

export type OSListAction = AddOSAction | UpdateOSAction | RemoveOSAction | ToggleFilterOSAction | SearchFilterOSAction| SetCurrentOSAction| ChangeStatusOSAction ;

// DarkMode Type

export type SetDarkModeAction = {
  type: string;
  status:boolean
}


export type EquipamentoListState = {
  data: Equipamento[],
  dataFiltred: Equipamento[],
}

export type Equipamento = {
  
  id:string,
  codigoEquipamento:string,
  nomeEquipamento:string,
  selecionado?:boolean,
}
export type EquipamentosOS ={
  id:string,
  codigoEquipamento:string,
  nomeEquipamento:string,
  qtdEquipamento:string
}

export type AddEquipmentAction = Equipamento &{
  type:string
}
export type UpdateEquipmentAction = Equipamento &{
  type:string
}

export type EquipamentoListAction = AddEquipmentAction | UpdateEquipmentAction
