import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TextInputComp from '../../coreUI/textInputComp/TextInputComp';
import { HomeContext } from './ArticlesWrapper';
import SearchIcon from '@mui/icons-material/Search';
import { isEmpty } from 'lodash';

type Props = {};

const SearchArticles = (props: Props) => {
  const { search, handleSearchValue } = useContext(HomeContext);
  return (
    <TextInputComp
      value={search}
      handleChange={handleSearchValue}
      handleCclickIcon={() => handleSearchValue({ target: { value: '' } })}
      icon={isEmpty(search) ? <SearchIcon /> : <CloseIcon />}
      label="Search"
    />
  );
};

export default SearchArticles;
