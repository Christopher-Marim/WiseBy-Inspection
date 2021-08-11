import { SetDarkModeAction } from "../types";
import { DARK_MODE_ACTION_TYPES } from "./actions";


const initialState = true

const darkModeContextReducer = (state = initialState, action: SetDarkModeAction) => {
    switch (action.type) {
    case DARK_MODE_ACTION_TYPES.SET_DARK_MODE:{
        const { status } = <SetDarkModeAction>action;
        return state = status;
    }
        
    default:
        return state;
    }
};

export default darkModeContextReducer;