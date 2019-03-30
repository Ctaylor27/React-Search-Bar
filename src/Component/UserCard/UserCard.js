import React from 'react';
import classes from './UserCard.module.css';

const userCard = (props) => {
   return (
     <div className={classes.Container}>
       <h2>{props.name}</h2>
       <img src={props.thumbnail} className={classes.Image} alt="Profile"/>
       <p>{props.location}</p>
       <p>{props.email}</p>
     </div>
   )
}

export default userCard;