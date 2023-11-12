import { Container } from '@mui/material';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { appWithTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import {
  getArticles,
  getSourceNewsAPI,
  searchArticles,
} from '../../redux/articles/actions';
import { isEmpty } from 'lodash';
import dynamic from 'next/dynamic';
import { Filter } from './fixedData';
import { constructionSearch } from './utils';

const ArticlesItems = dynamic(() => import('./ArticlesItems'), { ssr: false });
const FIlterArticles = dynamic(() => import('./FIlterArticles'), {
  ssr: false,
});
const NewFeedArticles = dynamic(() => import('./NewFeedArticles'), {
  ssr: false,
});

export const HomeContext = createContext<any>({});

type Props = {};

const ArticlesWrapper = (props: Props) => {
  const dispatch: any = useDispatch();
  const [search, setSearch] = useState<string>('');

  const [newFeeds, setNewFeeds] = useState<{
    source: string;
    categories: string;
    authors: string;
  }>({
    source: '',
    categories: '',
    authors: '',
  });

  const [filter, setFilter] = useState<Filter>({
    from: null,
    to: null,
    // category: '',
    source: '',
    filterNewApisString: '',
    filterNewYorkString: '',
  });
  const { filterNewApisString, filterNewYorkString } = filter;

  const handleFilterValue = useCallback(
    (e: any) => {
      let filterUpdate = { ...filter, [e.target.name]: e.target.value };
      let filterValues = constructionSearch(filterUpdate);

      setFilter({
        ...filter,
        filterNewApisString: filterValues.filerStringNewApi,
        filterNewYorkString: filterValues.filerStringNewYork,
        [e.target.name]: e.target.value,
      });

      dispatch(
        searchArticles(
          `${search}${filterValues.filerStringNewApi}`,
          `${search}${filterValues.filerStringNewYork}`
        )
      );
    },
    [filter]
  );

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log({ val: e.target.value });
      setSearch(
        isEmpty(e.target.value) ? e.target.value : `&q=${e.target.value}`
      );
    },
    [search]
  );

  useEffect(() => {
    if (
      isEmpty(search) &&
      isEmpty(filterNewApisString) &&
      isEmpty(filterNewYorkString)
    ) {
      dispatch(getArticles());
    } else {
      dispatch(
        searchArticles(
          `${search}${filterNewApisString}`,
          `${search}${filterNewYorkString}`
        )
      );
    }
  }, [search]);

  const handleFeedsValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNewFeeds({ ...newFeeds, [e.target.name]: e.target.value });
      // Then we will read this value on our api calls
      localStorage.setItem(e.target.name, e.target.value);
    },
    [newFeeds]
  );

  useEffect(() => {
    dispatch(getSourceNewsAPI());
  }, []);

  const value = useMemo(() => {
    return {
      search,
      newFeeds,
      handleSearchValue,
      handleFeedsValue,
      filter,
      handleFilterValue,
    };
  }, [
    search,
    newFeeds,
    handleSearchValue,
    handleFeedsValue,
    filter,
    handleFilterValue,
  ]);
  return (
    <HomeContext.Provider value={value}>
      <Container maxWidth="xl">
        <NewFeedArticles />
        <FIlterArticles />
        <ArticlesItems />
      </Container>
    </HomeContext.Provider>
  );
};

export default appWithTranslation(ArticlesWrapper);
