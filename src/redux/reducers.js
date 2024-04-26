import {SAVE_USER_DATA, SAVE_USER_DATA_FAILURE} from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SAVE_USER_DATA_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
