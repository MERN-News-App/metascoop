import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';




const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3px 5px',
    display: 'flex',
    alignItems: 'center',
    // height: 90%
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  resize:{
    fontSize:20
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
     
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' , },{style: {fontSize: 30}}}
        fullWidth
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
