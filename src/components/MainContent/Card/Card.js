import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AvatarImg from "../../../assets/avatar.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              MY DOCS
            </Typography>
            <Typography variant="h5" component="h2">
                Insurance
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Attachments: avatarimg.jpeg.
            </Typography>
            <Typography variant="body2" component="p">
              Name : Jim
              
              <br />
              Surname : Clarke
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
        <div
          style={{
            border: "1px solid lightgrey",
            width: "200",
            height: "250",
            margin: "0 auto",
          }}
        >
          <div>
            <img src={AvatarImg} alt="AvatarImg" />
          </div>
        </div>
      </div>
    </Card>
  );
}
