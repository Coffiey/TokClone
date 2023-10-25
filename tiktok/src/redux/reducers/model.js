import { CLEAR_MODEL, MODEL_OPEN_COMMENT_SECTION } from "../constants";

const initialState = {
  open: false,
  data: null,
  modelType: -1,
};

export const model = (state = initialState, action) => {
  switch (action.type) {
    case MODEL_OPEN_COMMENT_SECTION:
      return {
        ...state,
        open: action.open,
        data: action.data,
        modelType: action.modelType,
      };
    case CLEAR_MODEL:
      return initialState;
    default:
      return state;
  }
};
