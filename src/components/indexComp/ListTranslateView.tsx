import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Dispatch,
  SetStateAction,
  useContext
} from "react";
import { TransList, TranslationText } from "./fixedData";
import TranslateCardComp from "../../coreUI/TranslateCardComp/TranslateCardComp";
import { HomeContext } from "../../../pages";
import { AppContext } from "../../../pages/_app";

type Props = {};

const ListTranslateView = (props: Props) => {
  const {
    setDisplayText,
    displayText,
    transList,
  }: {
    transList: TranslationText | null;
    setDisplayText: Dispatch<SetStateAction<TransList>>;
    displayText: TransList;
  } = useContext(HomeContext);
  const { theme } = useContext(AppContext);

  const handleResteText = (item: TransList) => {
    setDisplayText(item);
  };
  return (
    <Grid item container xs={12} spacing={3} sx={{ mb: "2%" }}>
      <Grid item xs={12} sx={{ mb: "10px" }}>
        <Typography variant="subtitle2" gutterBottom>
          List of old transations
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={2}
        sx={{ maxHeight: "30em", overflowY: "scroll", padding: "1em" }}
      >
        {transList &&
          Object.values(transList).map((item: TransList) => (
            <Grid
              item
              xs={12}
              md={2}
              key={item.id}
              onClick={() => handleResteText(item)}
            >
              <TranslateCardComp
                id={item.id}
                originText={item.origin}
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 1s",
                  background:
                    displayText.id === item.id
                      ? theme.palette.primary.main
                      : "inherit",
                  color:
                    displayText.id === item.id
                      ? theme.palette.secondary.main
                      : "inherit",
                  "&:hover": {
                    background: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default ListTranslateView;
