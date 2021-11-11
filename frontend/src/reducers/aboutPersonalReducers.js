import { PERSONAL_CONTENT_LIST_FAIL, PERSONAL_CONTENT_LIST_REQUEST, PERSONAL_CONTENT_LIST_SUCCESS } from "../constants/aboutPersonalConstants";

export const PersonalContentListReducer = ( state = { loading: true, personalContents: [] }, action) => {
    switch (action.type) {
      case PERSONAL_CONTENT_LIST_REQUEST:
        return { loading: true };
      case PERSONAL_CONTENT_LIST_SUCCESS:
        return { loading: false, personalContents: action.payload };
      case PERSONAL_CONTENT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };