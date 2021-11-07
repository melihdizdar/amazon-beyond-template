import axios from "axios";
import { HOME_CARD_LIST_FAIL, HOME_CARD_LIST_REQUEST, HOME_CARD_LIST_SUCCESS } from "../constants/homeConstants";

export const listHomeCards = () => async (dispatch) => {
    dispatch({
      type: HOME_CARD_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get('/api/home');
      dispatch({ type: HOME_CARD_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: HOME_CARD_LIST_FAIL, payload: error.message });
    }
  };