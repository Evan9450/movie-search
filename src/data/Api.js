import axios from 'axios';

//apikey=6c1ae227
const OMDb_URL = 'https://www.omdbapi.com/?apikey=6c1ae227&';

export const SearchByTitle = async (title) => {
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

export const getMorePage = async (title, page) => {
	let result = await axios({
		method: 'post',
		url: OMDb_URL + `&s=${title}&page=${page}`,
	})
		.then(function (res) {
			return res;
		})
		.catch(function (res) {});
	return result;
};

export const FilterByType = async (title, type) => {
	let result = await axios({
		method: 'post',
		url: OMDb_URL + `&s=${title}&type=${type}`,
		// config: { headers: { 'Content-Type': 'multipart/form-data' } },
	})
		.then(function (res) {
			return res;
		})
		.catch(function (res) {});
	return result;
};

export const SearchByID = async (id) => {
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
