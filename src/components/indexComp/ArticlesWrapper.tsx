import { Container } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import ArticlesItems from './ArticlesItems';
import FIlterArticles from './FIlterArticles';
import { appWithTranslation } from 'next-i18next';

export const HomeContext = createContext<any>({});

type Props = {};

const ArticlesWrapper = (props: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleSearchValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };
  const value = useMemo(() => {
    return {
      search,
    };
  }, [search]);

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
