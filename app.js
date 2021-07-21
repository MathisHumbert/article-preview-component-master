const container = document.querySelector('.container');
const btns = document.querySelectorAll('.share');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.toggle('active');
  });
});
