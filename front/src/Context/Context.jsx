import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Crear contexto
export const HouseContext = createContext();

export function Context({ children }) {
  const usernameLS = JSON.parse(localStorage.getItem('username'))??[]
  const [username, setUsername]=useState(usernameLS)
  const [data, setData] = useState([]);
 

  useEffect(() => {
    axios("http://localhost:8000/Home").then((res)=>setData(res.data))
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('username',JSON.stringify(username))
  },[username])   
  
 console.log(data);
  return (
    <HouseContext.Provider value={{ data, setData,username, setUsername }}>
      {children}
    </HouseContext.Provider>
  );
  
}
