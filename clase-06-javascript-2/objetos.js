console.log("OBJETOS =========");

// const PI = 3.14;
// PI = 899899;

/* OBJETOS LITERALES / GENERICOS */
const mascota = {
  nombre: "perrito",
  tipo: "gato",
  edad: 99,
  ladrar: function () {
    console.log("miau");
  },
  tieneDueño: true,
};

/* CLASES */
class Persona {
  apellido;
  edad = 18;

  constructor(nombre, apellido, edad) {
    if (typeof nombre === "string") {
      this.nombre = nombre;
    } else {
      throw new Error("Error");
    }
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    // console.log("Hola Soy " + this.nombre + " " + this.apellido);
    // console.log("Hola Soy ".concat(this.nombre, " ", this.apellido));
    // console.log(String().concat("Hola Soy ", this.nombre, " ", this.apellido));
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);
  }

  static comparar(p1, p2) {
    return p1.nombre === p2.nombre && p1.apellido === p2.apellido;
  }
}

mascota.otroDato = "Otra cosa";

// mascota.nombre = "etc";

console.log(mascota);

const persona = new Persona("Hola", "Adios", 99);

persona.otroDato = "Otra cosa";
console.log(persona);

console.log(typeof "Hola"); // string
console.log(typeof mascota); // object
console.log(typeof mascota.edad); // number
console.log(typeof mascota.ladrar); // function
console.log(typeof persona); // Persona

persona.saludar();

console.log("MAS EJEMPLOS =========");

const p1 = new Persona("Agus", "F", 33);
const p2 = new Persona("Agus", "F", 33);
const p3 = new Persona("Nico", "F", 33);

p1.saludar();
p2.saludar();
p3.saludar();

console.log(p1 == p2);
console.log(p1 === p2); // si on objetos, también checkea que sean la misma instancia
console.log(p2 === p2);
console.log(p1.nombre === p2.nombre);

console.log(Persona.comparar(p1, p2));

for (propiedad in p1) {
  console.log(propiedad, p1[propiedad]);
}

console.log(p1["nombre"]);

const propiedades = Object.keys(p1);
