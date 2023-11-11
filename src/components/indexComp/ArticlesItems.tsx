import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import TableWrapperComp from '../../coreUI/tableComp/TableWrapperComp';
import SearchArticles from './SearchArticles';
// import FIlterArticles from './FIlterArticles';
import CardComp from '../../coreUI/cardComp/CardComp';
import { useSelector, shallowEqual } from 'react-redux';
import { ArticlesSelector } from '../../redux/articles/selector';

type Props = {};

const ArticlesItems = (props: Props) => {
  const articlesSelector = useSelector(
    (state: any) => ArticlesSelector(state).articles,
    shallowEqual
  );
  return (
    <Grid item container xs={12} spacing={3} sx={{ mb: '2%' }}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Search
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: '10px' }}>
        <SearchArticles />
      </Grid>
      {articlesSelector?.map((item: any, index: number) => (
        <Grid key={index} item xs={12}>
          <CardComp
            source={item.source}
            name={item.title}
            date={item.date}
            content={item.description}
            author={item.author}
            url={item.url}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesItems;
