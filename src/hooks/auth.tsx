import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import { netInfo } from '../utils/netInfo';

interface User {
  nome: string;
  login: string;
  senha: string;
  systemUnitId: string;
  systemUserId: string;
}

interface RequestSignIn {
  login:string,
  senha:string
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({login,senha}:RequestSignIn): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      const statusInternet = await netInfo()
      
      if(statusInternet && storagedUser){
       await signIn(JSON.parse(String(storagedUser)))
      }
      else{
        if (storagedUser && storagedToken) {
          setUser(JSON.parse(storagedUser));
          
        }

      }
      setLoading(false);
    }

    loadStorageData();
  },[]);

  async function signIn({login,senha}:RequestSignIn)  {
    setLoading(true)
    const response = await auth.signIn({login,senha});
    setLoading(false)
    setUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};