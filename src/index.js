import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuración de EJS
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios
app.use(express.static(join(__dirname, "public")));

// Rutas
app.use(indexRoutes);

// Manejo de errores
app.use((req, res, next) => {
  res.status(404).render("404", {
    title: "Página no encontrada - PsicErika",
    pageCSS: "/css/404.css",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500", {
    title: "Error del servidor - PsicErika",
    pageCSS: "/css/500.css",
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));