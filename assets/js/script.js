let index = 0;
const movies = document.querySelectorAll(".movie");

function trocarSlide() {

  movies.forEach(movie => movie.classList.remove("active"));

  movies[index].classList.add("active");

  index = (index + 1) % movies.length;
}

setInterval(trocarSlide, 3000);