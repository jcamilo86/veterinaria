const botonEnviar = document.querySelector("#botonEnviar");
const nombreDeMascota = document.querySelector("#nombreDeMascota");
const edad = document.querySelector("#edad");
const direccion = document.querySelector("#direccion");
const nombreDeEncargado = document.querySelector("#nombreDeEncargado");
const tablaMascotas = document.querySelector("#tablaMascotas");

function mostrarMascotas(mascotas) {
  let mascotasHtml = "";
  mascotas.forEach((mascota) => {
    mascotasHtml += `<tr><td>${mascota.nombreDeMascota}</td><td>${mascota.edad}</td><td>${mascota.direccion}</td><td>${mascota.nombreDeEncargado}</td></tr>`;
  });
  tablaMascotas.innerHTML = mascotasHtml;
}

fetch("http://localhost:3000/mascotas")
  .then((response) => response.json())
  .then((data) => mostrarMascotas(data));

botonEnviar.addEventListener("click", () => {
  const mascotaBody = {
    nombreDeMascota: nombreDeMascota.value,
    edad: edad.value,
    direccion: direccion.value,
    nombreDeEncargado: nombreDeEncargado.value,
  };
  console.log(mascotaBody);
  fetch("http://localhost:3000/mascotas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mascotaBody),
  })
    .then((response) => response.json())
    .then((data) => mostrarMascotas(data));
});
