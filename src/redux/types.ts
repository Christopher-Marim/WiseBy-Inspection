
export type AppState = {
  osList: OSListState,
}

export type Responsavel = {
  nome: string;
  systemUserId: string;
  systemUnitId: string;
};

export type OS = {
  id: string;
  nomeOs: string;
  numeroOs: string;
  dataOs: string;
  tecnico: Responsavel;
  status: string;
}

export type OSListState = {
  data: OS[],
  dataFiltred: OS[]
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
  filter: string;
}

export type SearchFilterOSAction = {
  type: string;
  filter: string;
  status: string;
}

export type OSListAction = AddOSAction | UpdateOSAction | RemoveOSAction | ToggleFilterOSAction | SearchFilterOSAction;
