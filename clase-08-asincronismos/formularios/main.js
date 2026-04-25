const getElement = document.getElementById("GET");
const getPorIdElement = document.getElementById("GET_ID");
const postElement = document.getElementById("POST");
const putElement = document.getElementById("PUT");
const deleteElement = document.getElementById("DELETE");

const API_URL = "https://final-labo-3.vercel.app/";

getElement.addEventListener("click", async (ev) => {
  const response = await fetch("https://final-labo-3.vercel.app");
  const json = await response.json();

  console.log(json);
});

// Formas de pasar datos
// Por ruta -> route params https://final-labo-3.vercel.app/{id}
// Por parametros query -> query params https://final-labo-3.vercel.app?id=79&nombre=loquesea&clave=valor
// Por body -> en formato texto plano / json / formdata / u otros formatos

getPorIdElement.addEventListener("click", async (ev) => {
  const response = await fetch("https://final-labo-3.vercel.app/asdasd", {
    method: "GET", // GET POR DEFECTO
  });
  const json = await response.json();
  console.log(response);

  // por status - !OK cuando sea 400 o 500
  if (!response.ok) {
    console.error(json);
  } else {
    console.log(json);
  }

  // por contenido
  if (json.error) {
    console.log("falló");
  } else {
    console.log("salió bien");
  }
});

const autoACrear = {
  marca: "UTN",
  modelo: "CLAE PROGRA 3",
  precio: 5555,
  fechaSalida: "1800-10-04",
};

// POST -> CREAR
postElement.onclick = async () => {
  // Si mi servidor espera JSON, tengo que mandar un texto que represesnte dicho JSON.

  const autoJSON = JSON.stringify(autoACrear);

  const response = await fetch(API_URL, {
    method: "POST",
    body: autoJSON,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  console.log(json);
};
// [object Object]

// GET -> Traer
// POST -> Crear
// PUT / PATCH -> Modificar
// DELETE -> Eliminar

// LOGIN -> POST

const autoAModificar = {
  id: 56,
  marca: "UTNadasdadaasd",
  modelo: "CLAE PROGRA",
  precio: 555555555,
  fechaSalida: "1800-10-04",
};

putElement.onclick = async () => {
  const response = await fetch(API_URL, {
    method: "PUT",
    body: JSON.stringify(autoAModificar),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  console.log(json);
};

deleteElement.onclick = async () => {
  const response = await fetch(API_URL + "70", { method: "DELETE" });
};
