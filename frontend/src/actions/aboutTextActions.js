import axios from "axios";
import { TEXT_CONTENT_LIST_FAIL, TEXT_CONTENT_LIST_REQUEST, TEXT_CONTENT_LIST_SUCCESS } from "../constants/aboutTextConstants";

export const listTextContents = () => async (dispatch) => {
    dispatch({
      type: TEXT_CONTENT_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get('/api/abouttext');
      dispatch({ type: TEXT_CONTENT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TEXT_CONTENT_LIST_FAIL, payload: error.message });
    }
};