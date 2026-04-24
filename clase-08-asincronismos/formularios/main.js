const getElement = document.getElementById("GET");
const getPorIdElement = document.getElementById("GET_ID");
const postElement = document.getElementById("POST");
const putElement = document.getElementById("PUT");
const deleteElement = document.getElementById("DELETE");

getElement.addEventListener("click", async (ev) => {
  const response = await fetch("https://final-labo-3.vercel.app");
  const json = await response.json();

  console.log(json);
});
