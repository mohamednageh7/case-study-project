export const formatDataNewsAPI = (resNewApi: any) => {
  const dataFormatNewApi = resNewApi.data.articles.map((item: any) => {
    return {
      source: item.source.name,
      author: item.author,
      title: item.title,
      description: item.description,
      url: item.url,
      date: item.publishedAt,
    };
  });

  return dataFormatNewApi;
};

export const formatNewYork = (resNewYork: any) => {
  const dataFormatNewYork = resNewYork.data.results.map((item: any) => {
    return {
      id: item.id,
      source: item.source,
      author: item.byline,
      title: item.title,
      description: item.abstract,
      url: item.url,
      date: item.published_date,
    };
  });

  return dataFormatNewYork;
};
