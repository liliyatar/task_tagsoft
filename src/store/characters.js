import { HANDLE_SUCCESS } from './actions';

const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case HANDLE_SUCCESS:
      return action.characters;

    default:
      return state;
  }
};

export default charactersReducer;
