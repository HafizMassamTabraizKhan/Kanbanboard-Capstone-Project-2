const bodyTag = document.querySelector('body');

const showModal = async (e) => {
  const show = `https://api.tvmaze.com/shows/${e.target.id}`;
  const data = await (await fetch(show)).json();
  const projectOverlay = document.createElement('section');
  projectOverlay.classList.add('popup-conatiner');

  const modalContent = `
  <div class="popup-card">
  <span class="work-close">X</span>
  <div class="show">
      <img src="${data.image.original}" class="show-img" alt="">
      <h2>${data.name}</h2>
      <ul class="show-details">
          <li>Rating: ${data.rating.average}</li>
          <li>Length: ${data.runtime}</li>
          <li>Language: ${data.language}</li>
          <li>Status: ${data.status}</li>
      </ul>
  </div>
  
  <div class="display-comnts-section">
      <h3>Comments <span>(2)</span></h3>
      <ul class="display-comnts">
          <li class="comnt">03/11/2021 Alex: I'd love to buy it!</li>
          <li class="comnt">03/12/2021 Mia: I love</li>
      </ul>
  </div>

  <div class="Add-comnt">
      <h3>Add a comment</h3>
      <form>
          <input type="text" class="form-control" placeholder="Your name">
          <textarea name="comment" class="form-control" id="comment" cols="30" rows="10"></textarea>
          <button class="btn">Comment</button>
      </form>
  </div>

</div>
      `;

  projectOverlay.innerHTML = modalContent;
  bodyTag.appendChild(projectOverlay);
  const closeBtn = document.querySelector('.work-close');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(projectOverlay);
  });
};

export default showModal;