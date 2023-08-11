import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { HeaderContact } from "../../components/Header/HeaderContac";

import Swal from "sweetalert2";

export const Register = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    // Enviar solicitud de registro al backend
    const response = await fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    });

    if (response.ok) {
      // Registro exitoso, mostrar notificación y redireccionar a la página de login
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro realizado con exito",
        showConfirmButton: false,
        timer: 4500,
        toast: "true",
      });
      setTimeout(() => {
        navigate("/login");
      }, 5000); // Esperar 4 segundos antes de redirigir
    } else {
      // Mostrar mensaje de error si el registro falla
      Swal.fire({
        position: "top-end",
        icon: "error",
        iconColor: "black",
        confirmButtonColor: "#5c21b8;",
        title: "Oops...",
        text: "Error al registrar",
        timer: 5500,
        toast: "true",
       
      });
      console.error("Error al registrar el usuario");
    }
  };

  return (
    <>
    <HeaderContact/>
    <div className="main_registro">
      <div class="login-box">
        <form onSubmit={handleRegister}>
          <div class="user-box">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Nombre:</label>
          </div>

          <div class="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label>Contraseña:</label>
          </div>

          <div class="user-box">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label>Email:</label>
          </div>

          <center className="btn_register" onClick={handleRegister}>
            <a href="login" type=" submit">
              Registrarse
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
    </>
  );
};
