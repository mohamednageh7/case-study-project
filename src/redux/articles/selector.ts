import { createSelector } from 'reselect';

export interface ArticlesReducer {
  loading: boolean;
  articles: any;
}
interface RootState {
  articles: ArticlesReducer;
}

// This used to memorize the selector value
export const ConfigSelector = createSelector(
  (state: RootState) => state.articles,
  (config: ArticlesReducer) => {
    return {
      loading: config.loading,
      articles: config.articles,
    };
  }
);
