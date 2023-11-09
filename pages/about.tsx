import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { AppContext } from "./_app";

type Props = {};

const About = (props: Props) => {
  const { theme } = useContext(AppContext);
  return (
    <Grid item container xs={12} sx={{ mt: "5%",display:'flex',justifyContent:'center' }}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          gutterBottom
          textAlign={"center"}
          sx={{
            color: theme.palette.primary.main,
            fontWeight:'bold'
          }}
        >
          About us
        </Typography>
      </Grid>
      <Grid item xs={7} >
        <Paper elevation={3} sx={{padding:'1em',textAlign: 'justify'}}>
          <Typography variant="subtitle2" gutterBottom >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et
            est sed felis feugiat accumsan. Ut odio elit, luctus porttitor augue
            eu, auctor sollicitudin massa. Quisque at nunc arcu. Sed mollis
            tortor ac efficitur elementum. Etiam ut sem convallis, facilisis
            nisi quis, sollicitudin dolor. Morbi ornare, nisl et laoreet
            laoreet, urna tortor ornare enim, blandit mattis tortor eros in
            nisi. Integer vehicula dolor a porta feugiat. Etiam nec tincidunt
            lacus, et vulputate nisi. Vivamus pharetra nulla orci, vitae
            vestibulum ipsum aliquam quis. Suspendisse dapibus elit nunc, sed
            hendrerit lectus vestibulum eget. Vestibulum interdum dolor vel urna
            placerat, sit amet efficitur dui molestie. Proin aliquam tempor
            metus vel sodales. Ut sed velit massa. Etiam non orci eros. Morbi at
            posuere ex. In arcu ipsum, lacinia vel suscipit aliquam, ullamcorper
            ac lorem. Maecenas vel fermentum mi. Vivamus eleifend pulvinar
            felis, sed placerat dolor auctor non. Nullam quis lectus purus.

          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
