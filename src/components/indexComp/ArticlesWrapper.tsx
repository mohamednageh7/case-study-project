import { Container } from '@mui/material';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ArticlesItems from './ArticlesItems';
import FIlterArticles from './FIlterArticles';
import { appWithTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { getArticles, searchArticles } from '../../redux/articles/actions';
import { debounce, isEmpty } from 'lodash';

export const HomeContext = createContext<any>({});

type Props = {};

const ArticlesWrapper = (props: Props) => {
  const dispatch: any = useDispatch();
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<{
    dateFrom: string | null;
    dateTo: string | null;
    category: string;
    source: string;
  }>({
    dateFrom: null,
    dateTo: null,
    category: '',
    source: '',
  });

  const [newFeeds, setNewFeeds] = useState<{
    source: string;
    categories: [];
    authors: [];
  }>({
    source: '',
    categories: [],
    authors: [],
  });

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearch(e.target.value);
    },
    [search]
  );

  const debouncedResults = useMemo(() => {
    return debounce(handleSearchValue, 300);
  }, []);

  useEffect(() => {
    if (isEmpty(search)) {
      dispatch(getArticles());
    } else {
      dispatch(searchArticles(`&q=${search}`));
    }
  }, [search]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const handleFilterValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFilter({ ...filter, [e.target.name]: e.target.value });
    },
    [filter]
  );

  const handleFeedsValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNewFeeds({ ...newFeeds, [e.target.name]: e.target.value });
    },
    [newFeeds]
  );

  const value = useMemo(() => {
    return {
      search,
      filter,
      newFeeds,
      handleSearchValue,
      handleFilterValue,
      handleFeedsValue,
    };
  }, [
    search,
    filter,
    newFeeds,
    handleSearchValue,
    handleFilterValue,
    handleFeedsValue,
  ]);
  return (
    <HomeContext.Provider value={value}>
      <Container maxWidth="xl">
        <FIlterArticles />
        <ArticlesItems />
      </Container>
    </HomeContext.Provider>
  );
};

export default appWithTranslation(ArticlesWrapper);
