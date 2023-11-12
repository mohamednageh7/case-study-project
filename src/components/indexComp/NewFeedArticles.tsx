import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ArticlesSelector } from '../../redux/articles/selector';
import dynamic from 'next/dynamic';
import { HomeContext } from './ArticlesWrapper';

const SelectInputComp = dynamic(
  () => import('../../coreUI/selectInputComp/SelectInputComp'),
  { ssr: false }
);
type Props = {};

const NewFeedArticles = (props: Props) => {
  const { newFeeds, handleFeedsValue } = useContext(HomeContext);
  const sourceSelector = useSelector(
    (state: any) => ArticlesSelector(state).source,
    shallowEqual
  );

  const authorsSelector = useSelector(
    (state: any) => ArticlesSelector(state).authors,
    shallowEqual
  );
  const { source, categories, authors } = newFeeds;

  return (
    <Grid
      item
      container
      xs={12}
      spacing={5}
      textAlign={'left'}
      display={'flex'}
      sx={{ mt: '1%', mb: '3%' }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          New Feeds
        </Typography>
      </Grid>
      <Grid item md={3} xs={12}>
        <SelectInputComp
          value={source}
          handleChange={handleFeedsValue}
          options={sourceSelector}
          name={'source'}
          label="Source"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <SelectInputComp
          value={authors}
          handleChange={handleFeedsValue}
          options={authorsSelector}
          name={'author'}
          label="Author"
        />
      </Grid>
      {/* The provided api not support filter by category */}
      {/* <Grid item md={3} xs={12}>
        <SelectInputComp
          value={category}
          handleChange={handleFilterValue}
          options={OptionsCategory}
          name={'category'}
          label="Category"
        />
      </Grid> */}
    </Grid>
  );
};

export default NewFeedArticles;
