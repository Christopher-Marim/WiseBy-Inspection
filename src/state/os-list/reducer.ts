import { AddOSAction, OSListAction, OSListState, RemoveOSAction } from "../types";
import { OS_LIST_ACTION_TYPES } from "./actions";

const initialState: OSListState = [];

const osList = (state: OSListState = initialState, action: OSListAction) => 
{
    const newState: OSListState = state; 
    switch (action.type){
        case OS_LIST_ACTION_TYPES.ADD_OS:
            
            const { osData } = <AddOSAction>action;
            return [...newState, {osData}];

        case OS_LIST_ACTION_TYPES.REMOVE_OS:
            
                const { index } = <RemoveOSAction>action;
                newState.splice(index, 1);
                return [...newState];
            
        default:
            return state;
    }
}

export default osList;