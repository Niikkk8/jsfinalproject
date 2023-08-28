const searchInput = document.getElementById("movie_input");
const movieListEl = document.querySelector('.movie_list');

async function renderMovies(filter) {
    const movies = await fetch(`http://www.omdbapi.com/?s=${searchInput.value}&apikey=59430427`);
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.Search.slice(0,6).map((movie) =>
        `<div class="movie_card">
            <div class="movie_card-container">
                <img src="${movie.Poster}"
                <div class="movie_description">
                    <h3 class="movie_name"><b>${movie.Title}</b></h3>
                    <p><b>${movie.Year}</b></p>
                </div>
            </div>
        </div>`
    ).join("");
};

