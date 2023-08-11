import { BrowserRouter, Routes, Route } from "react-router-dom";

import { House } from "./components/House/House";
import { HouseDetail } from "./Pages/HouseDetail/HouseDetail";
import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Register/Login";
import { Contacto } from "./Pages/Contacto/Contacto";
import { Cuenta } from "./Pages/Cuenta/Cuenta";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/detail/:id" element={<HouseDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/account" element={<Cuenta />} />
      </Routes>
    </BrowserRouter>
  );
}
