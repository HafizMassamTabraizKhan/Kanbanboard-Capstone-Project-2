const bodyTag = document.querySelector('body');

const showModal = async (id) => {
  const show = `https://api.tvmaze.com/shows/${id}`;
  const data = await (await fetch(show)).json();
  const projectOverlay = document.createElement('section');
  projectOverlay.classList.add('popup-conatiner');

  let modalContent = `
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
      <h3>Comments <span class="comnts-count"></span></h3>
      <ul class="display-comnts">
      </ul>
  </div>

  <div class="Add-comnt">
      <h3>Add a comment</h3>
      <form id="${id}" class="comment-form">
          <input type="text" class="form-control" id="username" placeholder="Your name" required>
          <textarea name="comment" class="form-control" id="comment" cols="30" rows="10" placeholder="Your insights" required></textarea>
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

  const comments = await getComments(id);
  const commentsCount = document.querySelector('.comnts-count');
  const commentsContainer = document.querySelector('.display-comnts');

  if(comments !== undefined && comments.length > 0){
    commentsContainer.innerHTML = '';
    for (let i = comments.length - 1; i >= 0; i -= 1) {
        commentsContainer.innerHTML += `
        <li>
        ${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}
        </li>
        `;
    }
    commentsCount.innerHTML = `(${comments.length})`;
  }
  else{
    commentsCount.innerHTML = '(0)';
    commentsContainer.innerHTML = 'no comments...';
  }

const addComment = async (id) => {
    const username = document.getElementById('username');
    const comment = document.getElementById('comment');

    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments`;
    const data = {
      item_id: `item${id}`,
      username: username.value,
      comment: comment.value,
    };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    username.value = '';
    comment.value = '';
    showModal(id);
  };

  const commentForm = document.querySelector('.comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(e.target.id);
  });
};

const getComments = async (id) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments?item_id=item${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data; 
  };


export default showModal;