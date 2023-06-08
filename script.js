document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
  new bootstrap.Tooltip(tooltip);
});

const myModal = document.getElementById('exampleModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});
