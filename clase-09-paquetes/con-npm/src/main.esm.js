/** Con common module:
 *
 * const algo = require("paquete");
 *
 * module.exports = variable_a_exportar
 *  */

/**
 * Con ESM:
 *
 * import algo from "paquete";
 *
 * export variable;
 */

import Swal from "../node_modules/sweetalert2/dist/sweetalert2.esm.js";

Swal.fire({
  title: "Error!",
  text: "Do you want to continue",
  icon: "error",
  confirmButtonText: "Cool",
});

import Toastify from "../node_modules/toastify-js/src/toastify-es.js";

Toastify({ text: "HOLA" }).showToast();
