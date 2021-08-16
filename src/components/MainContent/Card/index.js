import React from "react";
import "./styles.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingTop:"50px",
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justifyContent="center"
    >
      <Grid item xs={12} >
        <Card />
      </Grid>
      <Grid item xs={12}>
        <Card />
      </Grid>
    </Grid>
  );
}
