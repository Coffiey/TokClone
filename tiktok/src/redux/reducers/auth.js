import { USER_STATE_CHANGE, LOG_OUT } from "../constants";

const initialState = {
  currentUser: null,
  loaded: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.currentUser,
        loaded: action.loaded,
      };
    case LOG_OUT:
      return {
        ...state,
        currentUser: null,
        loaded: true,
      };
    default:
      return state;
  }
};
