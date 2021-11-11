import {TEXT_CONTENT_LIST_FAIL, TEXT_CONTENT_LIST_REQUEST, TEXT_CONTENT_LIST_SUCCESS} from "../constants/aboutTextConstants";

export const TextContentListReducer = ( state = { loading: true, textContents: [] }, action) => {
    switch (action.type) {
      case TEXT_CONTENT_LIST_REQUEST:
        return { loading: true };
      case TEXT_CONTENT_LIST_SUCCESS:
        return { loading: false, textContents: action.payload };
      case TEXT_CONTENT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };