import renderHeader from './header.js';
import showModal from './commentWindow.js';

export const movies = 'https://api.tvmaze.com/shows';
const getAllmovies = async () => {
  const result = await fetch(movies);
  let showoutput = '';
  const data = await result.json();
  data.forEach((movie) => {
    const displaymovie = `<li class="movie" id=${movie.id}>
    <img src=${movie.image.original}
        alt="">
    <div class="detail">
        <h3>${movie.name}</h3>
        <div class="likes">
            <i class='far fa-heart' id=${movie.id}></i>
            <span class="likes">5 likes</span>
        </div>
    </div>
    <div class="reserve-comment">
        <button class="btn cmnt-btn" id=${movie.id}>Comments</button>
        <button class="btn res-btn" id=${movie.id}>Reservations</button>
    </div>
</li>`;
    showoutput += displaymovie;
  });
  const movieSection = document.getElementById('movies-list');
  movieSection.innerHTML = showoutput;
  renderHeader();

  const showBtns = document.querySelectorAll('.btn');
  showBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    showModal(e.target.id);
  }));
};

export default getAllmovies;