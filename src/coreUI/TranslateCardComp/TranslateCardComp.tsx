import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type Props = {
  id: string;
  originText: string;
  style?:object
};

const TranslateCardComp = ({ id, originText,style={} }: Props) => {
    
  return (
    <Card
      sx={style}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Id: {id.slice(-10,-6)}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {originText.slice(0,10)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TranslateCardComp;
