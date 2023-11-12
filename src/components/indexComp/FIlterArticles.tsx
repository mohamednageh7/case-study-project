import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ArticlesSelector } from '../../redux/articles/selector';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dynamic from 'next/dynamic';
import { HomeContext } from './ArticlesWrapper';
const SelectInputComp = dynamic(
  () => import('../../coreUI/selectInputComp/SelectInputComp'),
  { ssr: false }
);
type Props = {};

const FIlterArticles = (props: Props) => {
  const { filter, handleFilterValue } = useContext(HomeContext);
  const sourceSelector = useSelector(
    (state: any) => ArticlesSelector(state).source,
    shallowEqual
  );
  const { from, to, source } = filter;

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
          Filter Results
        </Typography>
      </Grid>
      <Grid item md={3} xs={12}>
        <SelectInputComp
          value={source}
          handleChange={handleFilterValue}
          options={sourceSelector}
          name={'source'}
          label="Source"
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

      <Grid item md={3} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            value={from}
            onChange={(value, context) =>
              !context.validationError &&
              handleFilterValue({
                target: {
                  value: value,
                  name: 'from',
                },
              })
            }
            sx={{
              width: '100%',
            }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item md={3} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="To"
            value={to}
            onChange={(value, context) =>
              !context.validationError &&
              handleFilterValue({
                target: {
                  value: value,
                  name: 'to',
                },
              })
            }
            sx={{
              width: '100%',
            }}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default FIlterArticles;
