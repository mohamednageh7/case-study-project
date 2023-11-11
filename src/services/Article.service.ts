import http from '../config/httpComman';

export default class ArticleService {
  // NewsAPI
  static async getSources() {
    return await http(process.env.NEXT_PUBLIC_BASE_URL_NEWS_API || '').get(
      `top-headlines/sources?apiKey=${process.env.NEXT_PUBLIC_NEWS_APIS}`
    );
  }

  static async getArticlesNewsApi(query?: string) {
    return await http(process.env.NEXT_PUBLIC_BASE_URL_NEWS_API || '').get(
      `everything?apiKey=${process.env.NEXT_PUBLIC_NEWS_APIS}&domains=techcrunch.com&pageSize=100` +
        (query ? query : '')
    );
  }

  // New York Times
  static async getArticlesNewYork() {
    return await http(process.env.NEXT_PUBLIC_BASE_URL_NEW_YORK || '').get(
      `mostpopular/v2/viewed/7.json?api-key=${process.env.NEXT_PUBLIC_NEW_YORK_KEY}`
    );
  }

  static async searchArticlesNewYork(query?: string) {
    return await http(process.env.NEXT_PUBLIC_BASE_URL_NEW_YORK || '').get(
      `search/v2/articlesearch.json?api-key=${process.env.NEXT_PUBLIC_NEW_YORK_KEY}&domains=techcrunch.com&pageSize=100` +
        (query ? query : '')
    );
  }
}
