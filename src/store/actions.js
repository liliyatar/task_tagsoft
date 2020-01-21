import { getCharactersFromServer } from '../api/api';

export const START_LOADING = 'START_LOADING';
export const HANDLE_SUCCESS = 'HANDLE_SUCCESS';
export const HANDLE_ERROR = 'HANDLE_ERROR';

export const startLoading = () => ({ type: START_LOADING });
export const handleError = () => ({ type: HANDLE_ERROR });

export const handleSuccess = (characters) => ({
  type: HANDLE_SUCCESS,
  characters,
});

export const loadCharacters = () => async(dispatch) => {
  dispatch(startLoading());

  try {
    getCharactersFromServer().then(({ results }) => {
      dispatch(handleSuccess(results));
    });
  } catch {
    dispatch(handleError());
  }
};
