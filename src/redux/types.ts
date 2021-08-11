
export type AppState = {
  osList: OSListState,
  darkModeContextReducer:boolean,
}

export type Responsavel = {
  nome: string;
  systemUserId: string;
  systemUnitId: string;
};

export type Fotos = {
nome?:string,
conteudo:string,
}

export type CheckList = 
{
  tarefa:string,
  status:string,
  fotos?:Fotos[],
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
  index: number;
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

export type OSListAction = AddOSAction | UpdateOSAction | RemoveOSAction | ToggleFilterOSAction | SearchFilterOSAction| SetCurrentOSAction;

// DarkMode Type

export type SetDarkModeAction = {
  type: string;
  status:boolean
}
