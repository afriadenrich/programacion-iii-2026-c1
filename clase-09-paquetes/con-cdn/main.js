const boton = document.getElementById("presionar");

async function createPdf() {
  const pdfDoc = await PDFLib.PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(
    PDFLib.StandardFonts.TimesRoman
  );

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;
  page.drawText("Hola Mundo!", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: PDFLib.rgb(0, 0.53, 0.71),
  });

  const pdfBytes = await pdfDoc.save("/algo.pdf");
}

boton.addEventListener("click", (ev) => {
  // SweetAlert
  //   window.Swal.fire("Hola mundo!");
  //   Swal.fire("Hola mundo!");

  //   createPdf();

  Toastify({
    text: "This is a toast",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {},
  }).showToast();
});

window.print();

// window guarda referencia de TODO lo que está instanciado.
// Variable GLOBAL

// http://sweetalert2.github.io/
// https://apvarun.github.io/toastify-js/
// https://getbootstrap.com/
