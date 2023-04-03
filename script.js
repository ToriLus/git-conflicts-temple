const yearElement = document.querySelector('[data-js="year"]');
const year = new Date().getFullYear();
yearElement.textContent = year;
const dateElement = document.querySelector('[data-js="date"]');
const date = new Date().toLocaleDateString("en-US");
dateElement.textContent = date;

