import express from "express";
import cors from "cors";
import receitasRoutes from "./src/routes/receitas.route.js";

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/receitas", receitasRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});