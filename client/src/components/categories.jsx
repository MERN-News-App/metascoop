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
    title: "Regional",
    description: "Read the latest regional news from around the world "
  },
  {
    title: "Technology",
    description: "Read the latest technological news from around the world "
  },
  {
    title: "Lifestyle",
    description: "Read the latest lifestyle news from around the world "
  },
  {
    title: "Business",
    description: "Read the latest business news from around the world "
  },
  {
    title: "General",
    description: "Read the latest general news from around the world "
  },
  {
    title: "Programming",
    description: "Read the latest programming news from around the world "
  },
  {
    title: "Science",
    description: "Read the latest science news from around the world "
  },
  {
    title: "Entertainment",
    description: "Read the latest entertainment news from around the world "
  },
  {
    title: "World",
    description: "Read the latest world news from around the world "
  },
  {
    title: "Sports",
    description: "Read the latest sports news from around the world "
  },
  {
    title: "Finance",
    description: "Read the latest financial news from around the world "
  },
  {
    title: "Academia",
    description: "Read the latest academic news from around the world "
  },
  {
    title: "Politics",
    description: "Read the latest political news from around the world "
  },
  {
    title: "Health",
    description: "Read the latest health news from around the world "
  },
  {
    title: "Opinion",
    description: "Read the latest opinion pieces from around the world "
  },
  {
    title: "Food",
    description: "Read the latest culinary news from around the world "
  },
  {
    title: "Game",
    description: "Read the latest gaming news from around the world "
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
