import {
    AddOSAction,
    Responsavel,
    RemoveOSAction,
    ToggleFilterOSAction,
    SearchFilterOSAction,
    SetCurrentOSAction,
    CheckList,
    ChangeStatusOSAction,
    Fotos,
    UpdateOSAction,
    OS,
    EquipamentosOS,
    SetListOSAction
} from "../types";

export enum OS_LIST_ACTION_TYPES {
    ADD_OS = 'OS_LIST/ADD_OS',
    REMOVE_OS = 'OS_LIST/REMOVE_OS',
    UPDATE_OS = 'OS_LIST/UPDATE_OS',
    FILTER_OS = 'OS_LIST/TOGGLE_FILTER_OS',
    SEARCH_OS = 'OS_LIST/SEARCH_OS',
    SET_CURRENT_OS = 'OS_LIST/SET_CURRENT_OS ',
    CHANGE_STATUS_OS = 'OS_LIST/CHANGE_STATUS_OS ',
    SET_LIST_OS = 'OS_LIST/SET_LIST_OS ',
}

export const addOS = (
    id: string,
    idTecnico: string,
    nomeOs: string,
    numeroOs: string,
    planta: string,
    statusOs: string,
    dataInicioPrevista: string,
    dataFimPrevista: string,
    dataInicioTecnico: string,
    dataFimTecnico: string,
    checkList: CheckList[],
    equipamentos: EquipamentosOS[],
    latitude: string,
    longitude: string,
    assinatura: string
): AddOSAction => ({
    type: OS_LIST_ACTION_TYPES.ADD_OS,
    osData: {
        id,
        idTecnico,
        nomeOs,
        numeroOs,
        planta,
        statusOs,
        dataInicioPrevista,
        dataFimPrevista,
        dataInicioTecnico,
        dataFimTecnico,
        checkList,
        equipamentos,
        latitude,
        longitude,
        assinatura,
    }
});

export const removeOS = (index: number): RemoveOSAction => ({
    type: OS_LIST_ACTION_TYPES.REMOVE_OS,
    index
})
export const toggleFilterOs = (filterFinish: boolean): ToggleFilterOSAction => ({
    type: OS_LIST_ACTION_TYPES.FILTER_OS,
    filterFinish
})
export const searchFilterOs = (filter: string, filterFinish: boolean): SearchFilterOSAction => ({
    type: OS_LIST_ACTION_TYPES.SEARCH_OS,
    filter,
    filterFinish,
})
export const setCurrentOs = (id: string): SetCurrentOSAction => ({
    type: OS_LIST_ACTION_TYPES.SET_CURRENT_OS,
    id,
})
export const changeStatusOs = (id: string, status: string): ChangeStatusOSAction => ({
    type: OS_LIST_ACTION_TYPES.CHANGE_STATUS_OS,
    id,
    status,
})
export const UpdateOS = (id: string, osData: OS,): UpdateOSAction => ({
    type: OS_LIST_ACTION_TYPES.UPDATE_OS,
    id,
    osData
})
export const setListOS = (osData: OS[],): SetListOSAction => ({
    type: OS_LIST_ACTION_TYPES.SET_LIST_OS,
    osData
})