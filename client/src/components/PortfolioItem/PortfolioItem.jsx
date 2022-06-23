import React from 'react'
import classes from './PortfolioItem.module.css'

export default function PortfolioItem(props) {
  return (
    <div className={classes.ItemDiv} style={{ backgroundImage: `url(images/portfolio/${props.item.img})` }}>
      <button onClick={props.showType} className={classes.ItemType}>{props.item.type}</button>
      <p className={classes.ItemTitle}>{props.item.title}</p>
    </div>
  )
}
