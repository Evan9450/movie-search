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

// export const FilterByYear = async (title, year) => {
//   let result = await axios({
//     method: 'post',
//     url: OMDb_URL + `&s=${title}&y=${year}`,
//     // config: { headers: { 'Content-Type': 'multipart/form-data' } },
//   })
//     .then(function (res) {
//       return res;
//     })
//     .catch(function (res) {});
//   return result;
// };

export const FilterByType = async (title, type) => {
  console.log('type', title, type);
  let result = await axios({
    method: 'post',
    url: OMDb_URL + `&s=${title}&type=${type}`,
    // config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then(function (res) {
      console.log('res', res);

      return res;
    })
    .catch(function (res) {});
  return result;
};

// export const FilterByYearType = async (title, year, type) => {
//   let result = await axios({
//     method: 'post',
//     url: OMDb_URL + `&s=${title}&y=${year}&y=${type}`,
//     // config: { headers: { 'Content-Type': 'multipart/form-data' } },
//   })
//     .then(function (res) {
//       return res;
//     })
//     .catch(function (res) {});
//   return result;
// };

export const SearchByID = async id => {
  let result = await axios({
    method: 'post',
    url: OMDb_URL + `&i=${id}`,
  })
    .then(function (res) {
      return res;
    })
    .catch(function (res) {});
  return result;
};
