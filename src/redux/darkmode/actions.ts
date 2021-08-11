import { SetDarkModeAction } from "../types";

export enum DARK_MODE_ACTION_TYPES {
    SET_DARK_MODE= 'SET_DARK_MODE_CONTEXT',
    
}

export const changeDarkMode = (status:boolean): SetDarkModeAction => ({
    type: DARK_MODE_ACTION_TYPES.SET_DARK_MODE,
    status
})