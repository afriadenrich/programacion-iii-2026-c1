/**
 * @class
 * @property {number} id
 * @property {string} url
 * @property {string} name
 * @property {string} language
 * @property {string[]} genres
 * @property {string} image
 */
export class Serie {
  id;
  url;
  name;
  language;
  genres;
  image;

  /**
   *
   * @param {string} id
   * @param {string} url
   * @param {string} name
   * @param {string} language
   * @param {string[]} genres
   * @param {string} image
   */
  constructor(id, url, name, language, genres, image) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.language = language;
    this.genres = genres;
    this.image = image;
  }

  toJsonString() {
    return JSON.stringify({
      id: this.id,
      url: this.url,
      name: this.name,
      language: this.language,
      genres: this.genres,
      image: this.image,
    });

    return JSON.stringify(this);
  }

  /**
   *
   * @param {string} json
   */
  static createFromJsonString(json) {
    const objeto = JSON.parse(json);

    return new Serie(
      objeto.id,
      objeto.url,
      objeto.name,
      objeto.language,
      objeto.genres,
      objeto.image
    );

    return new Serie(objeto);
  }

  createHtmlElement() {
    const divAgrupadora = document.createElement("div");

    const nombreElement = document.createElement("p");
    nombreElement.textContent = this.name;

    const idiomaElement = document.createElement("p");
    idiomaElement.textContent = this.language;

    // const generosElement = document.createElement("ul");

    // this.genres.forEach((genero) => {
    //   const generoElement = document.createElement("li");
    //   generoElement.textContent = genero;

    //   generosElement.appendChild(generoElement);
    // });
    const generosElement = document.createElement("p");
    generosElement.textContent = this.genres.join(" - ");

    const imagen = document.createElement("img");
    imagen.src = this.image;
    imagen.width = 50;

    const attachment = document.createElement("a");
    attachment.href = this.url;
    attachment.target = "_blank"; // Abrir en otra pestaña "en blanco"

    attachment.append(imagen);

    nombreElement.onclick = () => {
      this.guardar();
    };

    divAgrupadora.append(
      attachment,
      nombreElement,
      idiomaElement,
      generosElement
    );

    return divAgrupadora;

    /*
    <div>
    <a>
    <img src="">
    </a>

    <p>Nombre</p>
    <p>imagen</p>
    <p>genero - genero - genero</p>
    </div>
    */
  }

  guardar() {
    let arrayAnteriorString = localStorage.getItem("series");

    let array = JSON.parse(arrayAnteriorString);

    if (!array) {
      array = [];
    }

    array.push(this);

    localStorage.setItem("series", JSON.stringify(array));
  }

  //   constructor(objeto){
  //     this.id = objeto.id;
  //     this.url = objeto.url;
  //     this.name = objeto.name;
  //     this.language = objeto.language;
  //     this.genres = objeto.genres;
  //     this.image = objeto.image.original;
  //   }
}

// new Serie(id, url);

// const objeto = {id: 1, url: ""};
// new Serie(objeto);
