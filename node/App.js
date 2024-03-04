import express from "express";

import cors from "cors";
import db from "./database/db.js";
import HomeRoutes from "./routes/HomeRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8000; // Definir el puerto de esta manera

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/Home", HomeRoutes);
app.use("/Users", userRoutes);

app.listen(port, () => { // Usar la variable 'port' aquí
  console.log(`Server UP running on http://localhost:${port}/`); // Usar 'port' para mostrar el puerto dinámicamente
});
