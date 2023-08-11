
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Link } from "react-router-dom";
import { HeaderContact } from "../../components/Header/HeaderContac";
import { useContext } from "react";
import { HouseContext } from "../../Context/Context";

export const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const { setUsername } = useContext(HouseContext); // Obtén la función setUsername del contexto
  // Variable para controlar la visibilidad del botón

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setIsButtonVisible(false); // Ocultar el botón al enviar el formulario
      setUsername(name)

      const response = await axios.post("http://localhost:8000/users/login", {
        name,
        password,
      });

      console.log(response.data);

      // Verificar si el inicio de sesión fue exitoso
      if (response.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          setIsButtonVisible(true); // Mostrar el botón después de la respuesta positiva
          navigate("/account", {
            replace: true,
          });
        }, 4500);
      } else {
        setIsLoading(false);
        setIsButtonVisible(true); // Mostrar el botón en caso de error
      }
    } catch (error) {
      setIsLoading(false);
      setIsButtonVisible(true); // Mostrar el botón en caso de error
      console.error(error);
    }
  };

  return (
    <>
      <HeaderContact />
      <div className="container-login">
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div className="user-box">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <label>Nombre:</label>
            </div>

            <div className="user-box">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <label>Contraseña:</label>
            </div>

            {isButtonVisible && ( // Mostrar el botón solo si la variable isButtonVisible es verdadera
              <center onClick={handleLogin}>
                <a href className="btn_register">
                  Entrar
                  <span></span>
                </a>
              </center>
            )}

          </form>
          {isLoading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div> </div>}
          {/* <Link to="/registre" onClick={handleRegistroClick}> */}
          <Link to="/register">
            <h6 className="textoLogin">¿Aún no te has registrado?</h6>
          </Link>
        </div>

      </div>
    </>
  );
};

