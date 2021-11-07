import { HOME_CARD_LIST_FAIL, HOME_CARD_LIST_REQUEST, HOME_CARD_LIST_SUCCESS } from "../constants/homeConstants";

export const HomeCardsListReducer = ( state = { loading: true, homeCards: [] }, action) => {
    switch (action.type) {
      case HOME_CARD_LIST_REQUEST:
        return { loading: true };
      case HOME_CARD_LIST_SUCCESS:
        return { loading: false, homeCards: action.payload };
      case HOME_CARD_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };