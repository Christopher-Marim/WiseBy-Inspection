import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppState, CheckList, Fotos, OS } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusOs, setCurrentOs, UpdateOS } from "../redux/os-list/actions";
interface RequestCurrentOs {
  id: string;
}

interface ReduxContextData {
  currentOsRedux: OS | null;
  SetCurrentOs(id: string): void;
  ChangeStatusOs(id: string, status: string): void;
  UpdateCurrentOS(id:string, osData:OS):void
}

const ReduxContext = createContext<ReduxContextData>({} as ReduxContextData);

const ReduxProvider: React.FC = ({ children }) => {
  const [currentOsRedux, setCurrentOsRedux] = useState<OS | null>(null);
  const [loading, setLoading] = useState(true);
  const currentOs = useSelector((state: AppState) => state.osList.currentOs);

  const dispatch = useDispatch();

  async function SetCurrentOs(id: string) {
    dispatch(setCurrentOs(id));
    setCurrentOsRedux(currentOs);
  }
  async function ChangeStatusOs(id: string, status: string) {
    dispatch(changeStatusOs(id, status));
   // const response:OS[] = useSelector((state:AppState) => state.osList.data)
    // await AsyncStorage.setItem('Redux:dataOs', JSON.stringify(response));
  }
  async function UpdateCurrentOS(id: string,osData:OS) {
    dispatch(UpdateOS(id,osData));
   // const response:OS[] = useSelector((state:AppState) => state.osList.data)
  }

  return (
    <ReduxContext.Provider
      value={{ currentOsRedux, SetCurrentOs, ChangeStatusOs, UpdateCurrentOS }}
    >
      {children}
    </ReduxContext.Provider>
  );
};

function useRedux() {
  const context = useContext(ReduxContext);

  if (!context) {
    throw new Error("useRedux must be used within an ReduxProvider.");
  }

  return context;
}

export { ReduxProvider, useRedux };
