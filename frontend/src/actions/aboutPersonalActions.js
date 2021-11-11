import axios from "axios";
import { PERSONAL_CONTENT_LIST_REQUEST, PERSONAL_CONTENT_LIST_SUCCESS, PERSONAL_CONTENT_LIST_FAIL } from "../constants/aboutPersonalConstants";

export const listPersonalContents = () => async (dispatch) => {
    dispatch({
      type: PERSONAL_CONTENT_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get('/api/aboutpersonal');
      dispatch({ type: PERSONAL_CONTENT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PERSONAL_CONTENT_LIST_FAIL, payload: error.message });
    }
  };
