const headerContainer = document.querySelector('.main-nav');
const renderHeader = () => {
  const totalMovies = document.querySelectorAll('.movie');
  headerContainer.innerHTML = `<a href="./index.html" class="logo">Movies</a>
<ul class="nav-list">
    <li><a href="#" class="nav-item" id="counter">Total Movies<span>(${totalMovies.length})</span></a></li>
    <li><a href="#" class="nav-item">Planets</a></li>
    <li><a href="#" class="nav-item">Races</a></li>
</ul>`;
};

export default renderHeader;