import React, { useContext } from "react";
import { HouseContext } from "../../Context/Context";


export function Cuenta() {
  const {username} = useContext(HouseContext); // Obtén el nombre del contexto

  return (
    <div >
      <h1 className="div.Account">Welcome</h1>
      <h1>{username} !</h1>
    </div>
  );
}
