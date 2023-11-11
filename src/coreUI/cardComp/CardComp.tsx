import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { isEmpty } from 'lodash';

type Props = {
  source: string;
  name: string;
  date: string;
  content: string;
  author: string;
  url: string;
};

const CardComp = ({ source, name, date, content, author, url }: Props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Source: {isEmpty(source) ? 'Not provided' : source}
        </Typography>
        <Typography variant="subtitle2" component="div">
          Title: {isEmpty(name) ? 'Not provided' : name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Published at: {isEmpty(date) ? 'Not provided' : date}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Author: {isEmpty(author) ? 'Not provided' : author}
        </Typography>
        <Typography variant="body2">{content}</Typography>
        <Link href={url} target="_blank">
          Link to article
        </Link>
      </CardContent>
    </Card>
  );
};

export default CardComp;
