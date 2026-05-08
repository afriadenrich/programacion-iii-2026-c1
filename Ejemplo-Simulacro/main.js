import { Serie } from "./serie.js";

const series = document.getElementById("series");

async function traer(arranque = 1) {
  // LIMPIAR TODO:
  series.replaceChildren();

  for (let i = arranque; i < arranque + 6; i++) {
    try {
      const response = await fetch("https://api.tvmaze.com/shows/" + i);

      const objeto = await response.json();

      const serie = new Serie(
        objeto.id,
        objeto.url,
        objeto.name,
        objeto.langage,
        objeto.genres,
        objeto.image.medium
      );

      series.appendChild(serie.createHtmlElement());
    } catch (e) {
      console.log("la serie no existe");
    }
  }
}

traer();

let pagina = 1;

async function paginaSiguiente() {
  pagina++;

  traer(1 + (pagina - 1) * 6);
}

async function paginaAnterior() {
  if (pagina === 1) return;
  pagina--;

  traer(1 + (pagina - 1) * 6);
}

document.getElementById("siguiente").onclick = paginaSiguiente;

document.getElementById("anterior").onclick = paginaAnterior;
