import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { watchlistReducer } from '../components/store';

const reducers = combineReducers({
  movies: watchlistReducer,
});
export default reducers;
