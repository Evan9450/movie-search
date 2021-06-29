export const addToWatchlist = item => {
  return {
    type: 'ADD_MOVIE',
    payload: item,
  };
};

export const removeFromWatchlist = item => {
  return {
    type: 'REMOVE_MOVIE',
    payload: item,
  };
};
