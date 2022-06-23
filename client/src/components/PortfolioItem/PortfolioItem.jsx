import React, { useContext} from 'react'
import classes from './PortfolioItem.module.css'
import { PortfolioContext } from '../context/portfolioContext'

export default function PortfolioItem({item}) {
  const { activeItem, activateItem, showType } = useContext(PortfolioContext)
  return (
    <div
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
