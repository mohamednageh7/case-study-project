import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TableWrapperComp from '../../coreUI/tableComp/TableWrapperComp';
import SearchArticles from './SearchArticles';

type Props = {};

const ArticlesItems = (props: Props) => {
  return (
    <Grid item container xs={12} spacing={3} sx={{ mb: '2%' }}>
      <Grid item xs={12} sx={{ mb: '10px' }}>
        <SearchArticles />
      </Grid>
      <Grid item xs={12}>
        <TableWrapperComp />
      </Grid>
    </Grid>
  );
};

export default ArticlesItems;
