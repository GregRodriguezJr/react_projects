import React from 'react';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <p>test from meetup item</p>
        </div>
        <div className={classes.actions}>
            <button>To Favorites</button>
        </div>
    </li>
  )
}

export default MeetupItem