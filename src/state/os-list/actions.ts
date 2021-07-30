import { AddOSAction, Responsavel, RemoveOSAction } from "../types";

export enum OS_LIST_ACTION_TYPES {
    ADD_OS = 'OS_LIST/ADD_USER',
    REMOVE_OS = 'OS_LIST/REMOVE_USER',
    UPDATE_OS = 'OS_LIST/UPDATE_USER'
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

export const removeOS = ( index: number):RemoveOSAction =>({
    type: OS_LIST_ACTION_TYPES.REMOVE_OS,
    index
})