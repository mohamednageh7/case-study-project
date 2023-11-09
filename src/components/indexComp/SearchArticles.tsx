import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TextInputComp from '../../coreUI/textInputComp/TextInputComp';

type Props = {};

const SearchArticles = (props: Props) => {
  return (
    <TextInputComp
      value={''}
      handleChange={function (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ): void {
        throw new Error('Function not implemented.');
      }}
      handleCclickIcon={function (): void {
        throw new Error('Function not implemented.');
      }}
      icon={<CloseIcon />}
    />
  );
};

export default SearchArticles;
