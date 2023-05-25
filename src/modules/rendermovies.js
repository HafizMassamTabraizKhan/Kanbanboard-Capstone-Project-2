import { getLikesCount, postLikes } from './involvement.js';
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
            <span class="likes" id='likes-${movie.id}'></span>
        </div>
    </div>
    <div class="reserve-comment">
        <button class="btn cmnt-btn" id=${movie.id}>Comments</button>
    </div>
</li>`;
    showoutput += displaymovie;
  });
  const movieSection = document.getElementById('movies-list');
  movieSection.innerHTML = showoutput;
  renderHeader();

  const updateLikesCount = async () => {
    const likesData = await getLikesCount();
    likesData.forEach((item) => {
      const likesCount = [`${item.likes}`];
      const likesCountElement = document.getElementById(`likes-${item.item_id}`);
      if (likesCountElement) {
        likesCountElement.innerHTML = likesCount;
      }
    });
  };

  const likeBtn = document.querySelectorAll('.likes');
  likeBtn.forEach((button) => {
    button.addEventListener('click', async (item) => {
      if (item.target.classList.contains('fa-heart')) {
        const { id } = item.target;
        postLikes(id);
        updateLikesCount();
      }
    });
    updateLikesCount();
  });

  const commentButtons = document.querySelectorAll('.btn');
  commentButtons.forEach((btn) => btn.addEventListener('click', (e) => {
    showModal(e.target.id);
  }));
};

export default getAllmovies;