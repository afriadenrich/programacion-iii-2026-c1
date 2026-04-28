document.getElementById("toastify").onclick = () => {
  const toast = Toastify({ text: "HOLA MUNDO" });

  toast.showToast();
  toast.showToast();
  toast.showToast();
};

document.getElementById("sweetalert").onclick = () => {
  Swal.fire("Hola mundo");
};
