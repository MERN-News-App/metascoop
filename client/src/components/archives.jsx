import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Grid from "@material-ui/core/Grid";
// import { loadCSS } from "fg-loadcss";
// import { green } from "@material-ui/core/colors";
// import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    height: 100,
    marginTop: 100
  }
}));

export default function Archives() {
  const classes = useStyles();

  return (
    <div className="outerContainer">
      <Grid container alignItems="stretch" />
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Archive mountains" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Archive travel" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Archive holiday" secondary="July 20, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Archive holiday" secondary="July 20, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Archive holiday" secondary="July 20, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Archive holiday" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </div>
  );
}
