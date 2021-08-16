import React from "react";
import "./styles.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: "50px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
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
      <Grid item xs={12}>
        <Card
          h1="MY DOCS"
          title="Insurance"
          p="Attachments : avatar.jpeg"
          name="Jim"
          surname="Clarke"
          button="UPLOAD NOW"
        />
      </Grid>
      <Grid item xs={12}>
        <Card
          h1="Certificates"
          title="Computer Science"
          p="Attachments : 9675875.jpeg"
          name="University of California"
          surname="Grade A"
          button="LEARN MORE"
        />
      </Grid>
      <Grid item xs={12}>
        <Card
          h1="Driving License"
          title="Motor Training School"
          p="Attachments : 9612375.jpeg"
          name="Valid till 12/09/2025"
          surname="Jim"
          button="DETAILS"
        />
      </Grid>
    </Grid>
  );
}
