import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppState, CheckList, Fotos, OS, OSListState } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import {
  addOS,
  changeStatusOs,
  setCurrentOs,
  setListOS,
  UpdateOS,
} from "../redux/os-list/actions";
interface RequestCurrentOs {
  id: string;
}

interface ReduxContextData {
  loading: boolean
  currentOsRedux: OS | null;
  SetCurrentOs(id: string): void;
  ChangeStatusOs(id: string, status: string): void;
  UpdateCurrentOS(id: string, osData: OS): void;
  GetListOsStorage(): void;
  SetNewsOSs(osData: OS[]): void;
}

const ReduxContext = createContext<ReduxContextData>({} as ReduxContextData);

const ReduxProvider: React.FC = ({ children }) => {
  const [currentOsRedux, setCurrentOsRedux] = useState<OS | null>(null);
  const [loading, setLoading] = useState(true);
  const currentOs = useSelector((state: AppState) => state.osList.currentOs);

  const response: OS[] = useSelector((state: AppState) => state.osList.data);

  const dispatch = useDispatch();

  async function SetCurrentOs(id: string) {
    dispatch(setCurrentOs(id));
    setCurrentOsRedux(currentOs);
  }
  async function ChangeStatusOs(id: string, status: string) {
    dispatch(changeStatusOs(id, status));
    await AsyncStorage.setItem("Redux:dataOs", JSON.stringify(response));
  }
  async function UpdateCurrentOS(id: string, osData: OS) {
    dispatch(UpdateOS(id, osData));
    await AsyncStorage.setItem("Redux:dataOs", JSON.stringify(response));
  }
  async function GetListOsStorage() {
    setLoading(true)
    const listOSaux = await AsyncStorage.getItem("Redux:dataOs");
    const listOS: OS[] = JSON.parse(listOSaux ? listOSaux : "[]");
    dispatch(setListOS(listOS));
    setLoading(false)

  }

  async function SetNewsOSs(osData: OS[]) {
    setLoading(true)
    const listOSaux = await AsyncStorage.getItem("Redux:dataOs");
    const listOS: OS[] = JSON.parse(listOSaux ? listOSaux : "[]");

    listOS.map((OS) => {
      osData.map((newOS, index) => {
        if (
          newOS.statusOs.toLowerCase() != "pendente" ||
          newOS.numeroOs == OS.numeroOs
        ) {
          osData.splice(index, 1);
        }
      });
    });

    osData.map((newOS) => listOS.push(newOS));

    dispatch(setListOS(listOS));
    await AsyncStorage.setItem("Redux:dataOs", JSON.stringify(response));
    setLoading(false)
  }

  return (
    <ReduxContext.Provider
      value={{
        loading,
        currentOsRedux,
        SetCurrentOs,
        ChangeStatusOs,
        UpdateCurrentOS,
        GetListOsStorage,
        SetNewsOSs,
      }}
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
