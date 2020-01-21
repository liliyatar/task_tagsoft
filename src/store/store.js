import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loadingReducer from './loading';
import errorReducer from './loadingError';
import charactersReducer from './characters';

export const getIsLoading = (state) => state.isLoading;
export const getLoadingError = (state) => state.loadingError;
export const getCharacters = (state) => state.characters;
export const getCharactersCount = (state) => getCharacters(state).length;
export const getSort = (state) => state.characters;

const initialState = {
  characters: [],
  isLoading: false,
  loadingError: false,
};

const rootReducer = combineReducers({
  characters: charactersReducer,
  isLoading: loadingReducer,
  loadingError: errorReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
