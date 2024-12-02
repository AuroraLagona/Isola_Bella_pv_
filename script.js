// Seleziona il bottone e il menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Aggiungi un evento al bottone hamburger
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // Aggiunge o rimuove la classe "active"
});