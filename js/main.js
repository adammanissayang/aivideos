console.log("AdamManis AI Studio");






const API_KEY = "MASUKKAN_API_KEY_KAU"; // 🔑 letak API key TMDB
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const carousel = document.getElementById("carousel");

// Fetch trending movie
fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    displayMovies(data.results);
  })
  .catch(err => console.error(err));

// Display movies
function displayMovies(movies) {
  carousel.innerHTML = "";

  movies.slice(0, 10).forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <span class="rank">${index + 1}</span>
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
    `;

    carousel.appendChild(card);
  });
}