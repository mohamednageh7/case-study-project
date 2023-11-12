import { ArticlesReducer } from './selector';
import {
  GET_ARTICLES,
  GET_SOURCE,
  LOADING,
  SEARCH_ARTICLES,
  STOP_LOADING,
} from './types';

const initialState: ArticlesReducer = {
  articles: [],
  loading: false,
  source: null,
  authors: null,
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
        authors: payload.map((item: any) => {
          return { id: item.author, text: item.author, value: item.author };
        }),
      };
    case SEARCH_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case GET_SOURCE:
      return {
        ...state,
        source: [
          {
            id: 'The New York Times',
            text: 'The New York Times',
            value: 'The New York Times',
          },
          ...payload,
        ],
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
