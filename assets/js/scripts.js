document.querySelectorAll('.toggle-next').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    button.nextElementSibling.classList.toggle('show');
  });
});