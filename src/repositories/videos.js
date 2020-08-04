import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const getAll = () => fetch(URL_VIDEOS)
  .then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }

    throw new Error('Não foi possivel pegar os dados');
  });

const create = (video) => fetch(URL_VIDEOS,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
  .then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }

    throw new Error('Não foi possivel pegar os dados');
  });

export default {
  getAll,
  create,
};
