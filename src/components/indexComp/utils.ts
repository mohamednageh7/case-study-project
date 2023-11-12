import moment from 'moment';
import { Filter } from './fixedData';
import { isEmpty } from 'lodash';
type Items = 'from' | 'to' | 'source';

const dataFormat = (date: string | null, format: string) =>
  moment(new Date(date ?? '')).format(format);
const checkValueNewYork = (value: string, item: string | null) => {
  switch (value) {
    case 'to':
      return item ? `&end_date=${dataFormat(item, 'YYYYMMDD')}` : '';
    case 'from':
      return item ? `&begin_date=${dataFormat(item, 'YYYYMMDD')}` : '';
    case 'source':
      return !isEmpty(item) ? `&fq=source(${item})` : '';
    default:
      return '';
  }
};

const checkValueNewApis = (value: string, item: string | null) => {
  switch (value) {
    case 'to':
      return item ? `&to=${dataFormat(item, 'YYYY-MM-DD')}` : '';
    case 'from':
      return item ? `&from=${dataFormat(item, 'YYYY-MM-DD')}` : '';
    case 'source':
      return !isEmpty(item)
        ? `&sources=${
            item === 'The New York Times' ? 'new-york-magazine' : item
          }`
        : '';
    default:
      return '';
  }
};
export const constructionSearch = (filter: Filter) => {
  let filerStringNewApi = '';
  let filerStringNewYork = '';
  console.log({ filter });
  for (let item in filter) {
    filerStringNewApi =
      filerStringNewApi + checkValueNewApis(item, filter[item as Items]);
    filerStringNewYork =
      filerStringNewYork + checkValueNewYork(item, filter[item as Items]);
  }

  console.log({ filerStringNewYork, filerStringNewApi });

  return {
    filerStringNewYork,
    filerStringNewApi,
  };
};
