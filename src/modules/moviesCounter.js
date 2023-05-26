const movieCounters = () => {
  const movies = document.querySelectorAll('.card');
  const counter = document.getElementById('counter');
  counter.innerText = movies.length;
  return movies.length;
};

export default movieCounters;