const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
	const item = action.payload;

	switch (action.type) {
		case 'ADD_MOVIE':
			if (state.filter((i) => i.Title == item.Title).length > 0) return state;

			return [...state, action.payload];

		case 'REMOVE_MOVIE':
			return state.filter((product) => product.Title != item.Title);

		default:
			return state;
	}
};
