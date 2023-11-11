import {
  GET_ARTICLES,
  GET_SOURCE,
  LOADING,
  SEARCH_ARTICLES,
  STOP_LOADING,
} from './types';

const initialState: any = {
  articles: [],
  loading: false,
  source: null,
};

export default function articlesReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case SEARCH_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case GET_SOURCE:
      return {
        ...state,
        source: payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
