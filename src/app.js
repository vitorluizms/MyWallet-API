import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";

//Criação do app
const app = express();

//Configurações
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
