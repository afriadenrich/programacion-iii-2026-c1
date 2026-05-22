/*
    <pre id="get"></pre>
    <pre id="post"></pre>
*/

const API_URL = "http://localhost:3000";
// const API_URL_GET =
//   `http://localhost:3000?clave=${valor}&clave=${valor}`

async function traer(orden, cantidad) {
  const parametros = new URLSearchParams({ orden, cantidad });

  const response = await fetch(`${API_URL}?${parametros.toString()}`);
}

async function crear(orden, cantidad) {
  const response = await fetch(`${API_URL}`, {
    body: JSON.stringify({ orden, cantidad }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const json = await response.json();
  console.log(json);
}

crear("alguno", 88);
