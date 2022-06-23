import React, {useContext, useEffect} from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import PortfolioMenu from '../PortfolioMenu/PortfolioMenu'
import classes from './Portfolio.module.css'
import { PortfolioContext } from '../context/portfolioContext'

export default function Portfolio() {
  const { items, itemsOnPage, setNeedLoad, filteredItems, loadItems, needLoad, detectWidth, windowWidth, handleKeyPress } = useContext(PortfolioContext)

  // для отслеживания ширины экрана
  useEffect(() => {
    window.addEventListener('resize', detectWidth)
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [detectWidth, windowWidth])

  // для отслеживания нажатия кнопки клавиатуры
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
      return () => {
        document.removeEventListener('keydown', handleKeyPress)
      }
  })

  // при первом рендере если кол-во эл-тов всего меньше или равно кол-во на странице - убираем кнопку загрузки
  useEffect(() => {
    if (items.length <= (itemsOnPage)) {
      setNeedLoad(false)
    } 
  }, [])


  return (
    <>
      <div className={classes.portfolioTitleDiv}>
        <p className={classes.portfolioTitle}>Portfolio</p>
        <p className={classes.portfolioDescription}>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
      <div className={classes.portfolioMenuDiv}>
        <PortfolioMenu />

        <div className={classes.portfolioItems}>
          {filteredItems.map((item) => 
            <PortfolioItem item={item} key={item.id}  />
          )}
        </div>
        <button onClick={loadItems} 
        className={`${classes.portfolioLoadBtn} ${needLoad ? '' : `${classes.portfolioLoadBtnDeactive}`}`}
        >
          LOAD MORE
        </button>
      </div>
    </>
  )
}
