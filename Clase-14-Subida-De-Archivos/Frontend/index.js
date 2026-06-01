/**
 * @type {HTMLInputElement} input
 */
const input = document.getElementById("input-file");
const boton = document.getElementById("enviar");

boton.addEventListener("click", (ev) => {
  // input.files -> obtiene un array de archivos dentro del input
  const archivo = input.files[0];

  const formData = new FormData();
  formData.append("titulo", "Titulo");
  formData.append("texto", "hola mundo");
  formData.append("imagenEnviada", archivo);

  fetch("http://localhost:3000/posteo", {
    method: "POST",
    body: formData,
  });
});
