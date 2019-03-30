import React from 'react';
import classes from './SearchBar.module.css';

const searchBar = (props) =>{
  return (
    <input 
      onChange={props.changed}
      className={classes.SearchBar} 
      type="text" 
      placeholder="Search for users"/>
  )
}


export default searchBar;