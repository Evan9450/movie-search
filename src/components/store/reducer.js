const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      if (state.includes(action.payload)) return state;
      // console.log(action.payload);
      return [...state, action.payload];
    case 'REMOVE_MOVIE':
      const item = action.payload;
      return state.filter(product => product !== item);

    default:
      return state;
  }
};
