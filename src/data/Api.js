import axios from 'axios';

//apikey=6c1ae227
const OMDb_URL = 'http://www.omdbapi.com/?apikey=6c1ae227&';

export const SearchByTitle = async title => {
  let result = await axios({
    method: 'post',
    url: OMDb_URL + `&s=${title}`,
    // config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then(function (res) {
      return res;
    })
    .catch(function (res) {});
  return result;
};
