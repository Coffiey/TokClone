import { CLEAR_MODEL, MODEL_OPEN_COMMENT_SECTION } from "../constants";

export const openCommentModel = (open, data) => (dispatch) => {
  console.log("fired");
  return dispatch({
    data,
    open,
    modelType: 0,
    type: MODEL_OPEN_COMMENT_SECTION,
  });
};

export const clearCommentModel = () => (dispatch) => {
  return dispatch({
    type: CLEAR_MODEL,
  });
};
