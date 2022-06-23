import React, {useState} from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import PortfolioMenu from '../PortfolioMenu/PortfolioMenu'
import classes from './Portfolio.module.css'

export default function Portfolio() {
  const [items, setItems] = useState([
    {id: 1, title: 'SOFA', type: 'Design', img: 'sofa.jpg' },
    {id: 2, title: 'KeyBoard', type: 'Branding', img: 'keyboard.jpg' },
    {id: 3, title: 'Work Media', type: 'Illustration', img: 'workmedia.jpg' },
    {id: 4, title: 'DDDone', type: 'Motion', img: 'dddone.jpg' },
    {id: 5, title: 'Abstract', type: 'Design', img: 'abstract.jpg' },
    {id: 6, title: 'HandP', type: 'Branding', img: 'handp.jpg' },
    {id: 7, title: 'Architect', type: 'Motion', img: 'architect.jpg' },
    {id: 8, title: 'CalC', type: 'Design', img: 'calc.jpg' },
    {id: 9, title: 'Sport', type: 'Branding', img: 'sport.jpg' },
    {id: 10, title: 'SOFA-2', type: 'Design', img: 'sofa.jpg' },
    {id: 11, title: 'KeyBoard-2', type: 'Branding', img: 'keyboard.jpg' },
    {id: 12, title: 'Work Media-2', type: 'Illustration', img: 'workmedia.jpg' },
    {id: 13, title: 'DDDone-2', type: 'Motion', img: 'dddone.jpg' },
    {id: 14, title: 'Abstract-2', type: 'Design', img: 'abstract.jpg' },
    {id: 15, title: 'HandP-2', type: 'Branding', img: 'handp.jpg' },
    {id: 16, title: 'Architect-2', type: 'Motion', img: 'architect.jpg' },
    {id: 17, title: 'CalC-2', type: 'Design', img: 'calc.jpg' },
    {id: 18, title: 'Sport-2', type: 'Branding', img: 'sport.jpg' },
  ])

  const [types, setTypes] = useState([
    { id: 1, name: 'Design'},
    { id: 2, name: 'Branding'},
    { id: 3, name: 'Illustration'},
    { id: 4, name: 'Motion'}
  ])
  const [filteredItems, setFilteredItems] = useState(items)
  const [activeType, setActiveType] = useState('Show All')

  // принимаем item из дочернего компонента
  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== items.id))
  }

  const showType = (e) => {
    console.log(e.target.innerText, e.target.innerText === types[0].name)
    console.log('useFilter');
    if (e.target.innerText === 'Show All') {
      setFilteredItems(items)
      setActiveType('Show All')
    } else {
      setFilteredItems(items.filter(item => item.type === e.target.innerText))
      setActiveType(e.target.innerText)
    }
  }

  return (
    <>
      <div className={classes.portfolioTitleDiv}>
        <p className={classes.portfolioTitle}>Portfolio</p>
        <p className={classes.portfolioDescription}>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
      <PortfolioMenu showType={showType} activeType={activeType} types={types}/>
      
      <div className={classes.portfolioItems}>
        {filteredItems.map((item) => 
          <PortfolioItem remove={removeItem} showType={showType} item={item} key={item.id}/>
        )}
        
      </div>
    </>
  )
}
