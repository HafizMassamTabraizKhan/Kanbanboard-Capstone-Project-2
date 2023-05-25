const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/likes';

const postLikes = async (id) => {
  const test = { item_id: id };
  await fetch(likesApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(test),
  });
};

const getLikesCount = async () => {
  const likes = await fetch(likesApi);
  const response = await likes.json();
  return response;
};

export { postLikes, getLikesCount };