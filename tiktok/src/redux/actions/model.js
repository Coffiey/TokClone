import { CLEAR_MODEL, MODEL_OPEN_COMMENT_SECTION } from "../constants";

export const openCommentModel = (open, data) => (dispatch) => {
  return dispatch({
    data,
    open,
    modelTyle: 0,
    type: MODEL_OPEN_COMMENT_SECTION,
  });
};

export const clearCommentModel = () => (dispatch) => {
  return dispatch({
    type: CLEAR_MODEL,
  });
};
