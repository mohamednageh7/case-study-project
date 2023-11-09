import { GET_ARTICLES, LOADING, FILTER_ARTICLES } from './types';

const initialState: any = {
  articles: false,
  loading: false,
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
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FILTER_ARTICLES:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
