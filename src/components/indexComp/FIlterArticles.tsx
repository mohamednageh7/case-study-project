import { Grid, Typography } from '@mui/material';
import SelectInputComp from '../../coreUI/selectInputComp/SelectInputComp';
import { useContext } from 'react';
import { HomeContext } from './ArticlesWrapper';
import { shallowEqual, useSelector } from 'react-redux';
import { ArticlesSelector } from '../../redux/articles/selector';
import { OptionsCategory } from './fixedData';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type Props = {};

const FIlterArticles = (props: Props) => {
  const { filter, handleFilterValue } = useContext(HomeContext);
  const sourceSelector = useSelector(
    (state: any) => ArticlesSelector(state).source,
    shallowEqual
  );
  const { dateFrom, dateTo, category, source } = filter;
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
      <Grid item md={3} xs={12}>
        <SelectInputComp
          value={category}
          handleChange={handleFilterValue}
          options={OptionsCategory}
          name={'category'}
          label="Category"
        />
      </Grid>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item md={3} xs={12}>
          <DatePicker
            label="From"
            value={dateFrom}
            onChange={(value) =>
              handleFilterValue({
                target: {
                  value: value,
                  name: 'From',
                },
              })
            }
            sx={{
              width: '100%',
            }}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <DatePicker
            label="To"
            value={dateTo}
            onChange={(value) =>
              handleFilterValue({
                target: {
                  value: value,
                  name: 'To',
                },
              })
            }
            sx={{
              width: '100%',
            }}
          />
        </Grid>
      </LocalizationProvider>
    </Grid>
  );
};

export default FIlterArticles;
