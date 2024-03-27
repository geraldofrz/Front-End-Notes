// @ts-nocheck
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({email, password}) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@yournotes:user", JSON.stringify(user));
      localStorage.setItem("@yournotes:token", token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
      console.log(response)
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível iniciar a sessão")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@yournotes:token");
    localStorage.removeItem("@yournotes:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@yournotes:token");
    const user = localStorage.getItem("@yournotes:user");

    if(token && user ) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={ { 
    signIn, 
    signOut,
    user: data.user
     } }>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth };
