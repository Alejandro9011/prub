import mongoose from "mongoose";
const url =
  "mongodb+srv://alejandro902019:456@cluster1.eoszury.mongodb.net/Universal?retryWrites=true&w=majority&appName=Cluster1";
mongoose.connect(url);

const db = mongoose.connection;
db.on("open", () => {
  console.log("Conectado a Mongo DB");
});
db.on("error", () => {
  console.log("Error al conectar a Mongo DB");
});

export default db;
