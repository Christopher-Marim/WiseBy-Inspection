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
    OS
} from "../types";

export enum OS_LIST_ACTION_TYPES {
    ADD_EQUIPAMENT = 'EQUIPMENT_LIST/ADD_EQUIPAMENT',
    UPDATE_EQUIPAMENT = 'EQUIPMENT_LIST/UPDATE_EQUIPMENT',
    FILTER_EQUIPAMENT = 'EQUIPMENT_LIST/FILTER_EQUIPMENT',
}


/* 
export const removeOS = (index: number): RemoveOSAction => ({
    type: OS_LIST_ACTION_TYPES.REMOVE_OS,
    index
})

export const UpdateOS = (id: string, osData: OS,): UpdateOSAction => ({
        type: OS_LIST_ACTION_TYPES.UPDATE_OS,
        id,
        osData
    }) */