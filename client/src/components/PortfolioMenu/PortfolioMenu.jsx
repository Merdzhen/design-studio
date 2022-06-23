import React from 'react'
import classes from './PortfolioMenu.module.css'

export default function PortfolioMenu({showType, activeType, types}) {
  return (
    <div className={classes.portfolioMenu}>
      <button onClick={showType} 
      className={`${classes.portfolioMenuItem} ${(activeType === 'Show All') ? `${classes.activePortfolioMenuItem}` : ''}`}>
        Show All
      </button>
      {types.map((type) =>
      <button onClick={showType} key={type.id} 
      className={`${classes.portfolioMenuItem} ${(activeType === type.name) ? `${classes.activePortfolioMenuItem}` : ''}`}>
        {type.name}
      </button>
      )}
    </div>
  )
}
