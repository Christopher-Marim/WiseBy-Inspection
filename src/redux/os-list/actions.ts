import { 
    AddOSAction, 
    Responsavel, 
    RemoveOSAction, 
    ToggleFilterOSAction, 
    SearchFilterOSAction, 
    SetCurrentOSAction } from "../types";

export enum OS_LIST_ACTION_TYPES {
    ADD_OS = 'OS_LIST/ADD_OS',
    REMOVE_OS = 'OS_LIST/REMOVE_OS',
    UPDATE_OS = 'OS_LIST/UPDATE_OS',
    FILTER_OS = 'OS_LIST/TOGGLE_FILTER_OS',
    SEARCH_OS = 'OS_LIST/SEARCH_OS',
    SET_CURRENT_OS = 'OS_LIST/SET_CURRENT_OS ',
}

export const addOS = (
    id: string,
    nomeOs: string,
    numeroOs: string,
    dataOs: string,
    tecnico: Responsavel,
    status: string,
): AddOSAction => ({
    type: OS_LIST_ACTION_TYPES.ADD_OS,
    osData: {
        id,
        nomeOs,
        numeroOs,
        dataOs,
        tecnico,
        status
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