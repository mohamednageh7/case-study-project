import { createSelector } from 'reselect';

export interface ArticlesReducer {
  loading: boolean;
  articles: any;
  source: { id: string | number; text: string; value: string }[] | null;
  authors: { id: string | number; text: string; value: string }[] | null;
}
interface RootState {
  articles: ArticlesReducer;
}

// This used to memorize the selector value
export const ArticlesSelector = createSelector(
  (state: RootState) => state.articles,
  (articlesData: ArticlesReducer) => {
    return {
      loading: articlesData.loading,
      articles: articlesData.articles,
      source: articlesData.source,
      authors: articlesData.authors,
    };
  }
);
