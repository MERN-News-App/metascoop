import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export function ArchivesButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}

export default ArchivesButtons;

/////////

// import Icon from '@material-ui/core/Icon';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > span': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// export default function Icons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Icon style={{ fontSize: 30}} color="primary">add_circle</Icon>
//     </div>
//   );
// }
