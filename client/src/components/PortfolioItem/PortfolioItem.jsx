import React from 'react'
import classes from './PortfolioItem.module.css'

export default function PortfolioItem({item, activeItem, activateItem, showType}) {
  return (
    <div
      // className={classes.ItemDiv}
      className={`${classes.ItemDiv} ${(activeItem === item.id) ? `${classes.activeItemDiv}` : ''}`}
      style={{ backgroundImage: `url(images/portfolio/${item.img})` }}
      onClick={(e) => activateItem(item.id)}
    >
      <button 
        onClick={(e) => showType(e.target.innerText)}
        className={classes.ItemType}
      >
        {item.type}
      </button>
      <p className={classes.ItemTitle}>{item.title}</p>
    </div>
  )
}
