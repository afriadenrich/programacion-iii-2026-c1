const { jsPDF } = window.jspdf;

console.log(jsPDF);

// import jsPDF from "jspdf"; -> Importá TODO y metelo en la variable jsPDF

// import { jsPDF } from "jspdf"; -> Importá SOLO la variable exportada jsPDF

// export AcroForm
// export AcroFormAppearence
// export GState

// export jsPDF

const doc = new jsPDF();

doc.text("Hello world!", 50, 200);
doc.save("a4.pdf");
