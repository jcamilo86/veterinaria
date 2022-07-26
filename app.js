const express = require("express");
const app = express();

app.use(express.json());

const mascotas = [
  {
    nombreDeMascota: "michi",
    edad: 4,
    direccion: "5 porra",
    nombreDeEncargado: "pedro",
  },
  {
    nombreDeMascota: "rocky",
    edad: 9,
    direccion: "arriba con 7",
    nombreDeEncargado: "papito",
  },
  {
    nombreDeMascota: "manchas",
    edad: 3,
    direccion: "la 8",
    nombreDeEncargado: "Sandro",
  },
];

app.use("/", express.static(__dirname + "/pagina"));

app.listen(3000, () => {
  console.log("servidor funcionando por el puertos 3000");
});

app.get("/mascotas", function (request, response) {
  response.json(mascotas);
});

app.post("/mascotas", (request, response) => {
  mascotas.push(request.body);
  response.json(mascotas);
});
