import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Categories = [
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  },
  {
    title: "x Publication",
    description: "Read all the latest news from x publication "
  }
];

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container>
      {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sport
          </Typography>
        </CardContent> */}
      {Categories.map(category => (
        <Grid item xs={12} sm={6} lg={3}>
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {category.title}
              </Typography>
              <Typography gutterBottom>{category.description}</Typography>
            </CardContent>
            <CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
          <br />
        </Grid>
      ))}
    </Grid>
  );
}
