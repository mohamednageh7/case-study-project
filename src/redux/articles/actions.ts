import { ulid } from 'ulid';
import ArticleService from '../../services/Article.service';
import {
  GET_ARTICLES,
  GET_SOURCE,
  LOADING,
  SEARCH_ARTICLES,
  STOP_LOADING,
} from './types';
import { formatDataNewsAPI, formatNewYork } from './utils';

// NewsAPI
export const getArticles = () => async (dispatch: any) => {
  try {
    dispatch(loading());
    const resNewApi = await ArticleService.getArticlesNewsApi();
    const resNewYork = await ArticleService.getArticlesNewYork();

    return dispatch({
      type: GET_ARTICLES,
      payload: [...formatDataNewsAPI(resNewApi), ...formatNewYork(resNewYork)],
    });
  } catch (e: any) {
    console.log(e);
  } finally {
    dispatch(stopLoading());
  }
};

export const getSourceNewsAPI = () => async (dispatch: any) => {
  try {
    dispatch(loading());
    const res = await ArticleService.getSources();
    const formatData = res.data.sources.map((item: any) => {
      return {
        id: item.id,
        text: item.name,
        value: item.id,
      };
    });
    return dispatch({
      type: GET_SOURCE,
      payload: formatData,
    });
  } catch (e: any) {
    console.log(e);
  } finally {
    dispatch(stopLoading());
  }
};

export const searchArticles =
  (dataNewApi: string, dataNewYork: string) => async (dispatch: any) => {
    try {
      dispatch(loading());
      const resNewYork = await ArticleService.searchArticlesNewYork(
        dataNewYork
      );
      const resNewApi = await ArticleService.getArticlesNewsApi(dataNewApi);

      // The format of the response changed for this api
      const formatNewYork = resNewYork.data.response.docs.map((item: any) => {
        return {
          id: item._id,
          source: item.source,
          author: item.byline.original,
          title: item.headline.main,
          description: item.lead_paragraph,
          url: item.web_url,
          date: item.pub_date,
        };
      });
      return dispatch({
        type: SEARCH_ARTICLES,
        payload: [...formatDataNewsAPI(resNewApi), ...formatNewYork],
      });
    } catch (e: any) {
      console.log(e);
    } finally {
      dispatch(stopLoading());
    }
  };

export const loading = () => (dispatch: any) => {
  return dispatch({
    type: LOADING,
  });
};

export const stopLoading = () => (dispatch: any) => {
  return dispatch({
    type: STOP_LOADING,
  });
};
