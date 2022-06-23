import React, { useContext} from 'react'
import classes from './PortfolioMenu.module.css'
import { PortfolioContext } from '../context/portfolioContext'

export default function PortfolioMenu() {
  const { showType, activeType, types, windowWidth } = useContext(PortfolioContext)

  // в зависимости от ширины экрана выводим либо div с меню, либо selet
  return (
    <>
      {windowWidth > 1040
      ?
        <div className={classes.portfolioMenu}>
          <button 
            onClick={(e) => showType(e.target.innerText)} 
            className={`${classes.portfolioMenuItem} ${(activeType === 'Show All') ? `${classes.activePortfolioMenuItem}` : ''}`}
          >
            Show All
          </button>
          {types.map((type) =>
          <button 
            onClick={(e) => showType(e.target.innerText)} 
            key={type.id} 
            className={`${classes.portfolioMenuItem} ${(activeType === type.name) ? `${classes.activePortfolioMenuItem}` : ''}`}
          >
            {type.name}
          </button>
          )}
        </div>
      : <select 
          className={classes.portfolioSelect}
          onChange={(e) => showType(e.target.value)}
          value={activeType}
        >
          <option key={0} value='Show All'>Show All</option>
          {types.map(type => <option key={type.id} value={type.name}>{type.name}</option>)}
        </select>
      }
    </>
  )
}
