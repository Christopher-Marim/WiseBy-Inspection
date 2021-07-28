import api from "./api";

interface Response {
  token: string;
  user: {
    nome:string,
    login: string,
    senha: string,
    systemUserId:string,
    systemUnitId:string
  };
}
interface RequestSignIn {
  login:string,
  senha:string
}

export async function signIn({login, senha}: RequestSignIn): Promise<Response> {
  console.log(login, senha)

  //const {data} = await api.get('/acessoappcoleta')
 //console.log(data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
          user:{
            nome:'Chrisotpher',
            login: `${login}`,
            senha: `${senha}`,
            systemUserId:'1', 
            systemUnitId:'1'
          }
        });
      }, 2000);
    });
  }