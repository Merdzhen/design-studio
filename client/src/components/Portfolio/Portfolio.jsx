import React, {useState, useEffect} from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import PortfolioMenu from '../PortfolioMenu/PortfolioMenu'
import classes from './Portfolio.module.css'

export default function Portfolio() {
  // все элементы портфолио (можно брать из БД если есть)
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
    {id: 19, title: 'HandP-3', type: 'Branding', img: 'handp.jpg' },
    {id: 20, title: 'HandP-4', type: 'Branding', img: 'handp.jpg' },
    {id: 21, title: 'HandP-5', type: 'Branding', img: 'handp.jpg' },
    {id: 22, title: 'HandP-6', type: 'Branding', img: 'handp.jpg' },
    {id: 23, title: 'HandP-7', type: 'Branding', img: 'handp.jpg' },
    {id: 24, title: 'HandP-8', type: 'Branding', img: 'handp.jpg' },
  ])
  // типы/категории элементов (можно брать из БД если есть)
  const [types, setTypes] = useState([
    { id: 1, name: 'Design'},
    { id: 2, name: 'Branding'},
    { id: 3, name: 'Illustration'},
    { id: 4, name: 'Motion'}
  ]) 
  const [itemsStep, setItemsStep] = useState(9) // шаг по количеству эл-ов для добавления на стр
  const [itemsOnPage, setItemsOnPage] = useState(itemsStep) //кол-во эл-тов на стр
  const [filteredItems, setFilteredItems] = useState(items.slice(0, itemsOnPage)) // выбранные элементы
  const [activeType, setActiveType] = useState('Show All') // выбранный/активный тип
  const [activeItem, setactiveItem] = useState() // выбранный/активный элемент
  const [windowWidth, setWindowWidth] = useState(window.innerWidth) //ширина экрана
  
 

  // ф-ция выбора типа и "фильтрации" элементов по выбранному типу
  const showType = (type) => {
    if (type === 'Show All') {
      setFilteredItems(items.slice(0, itemsOnPage))
      setActiveType('Show All')
    } else {
      const newItems = items.filter(item => item.type === type)
      setFilteredItems(newItems.slice(0, itemsOnPage))
      setActiveType(type)
    }
  }

  // ф-ция выбора элемента
  const activateItem = (id) => {
    activeItem === id ? setactiveItem() : setactiveItem(id)
  }

  // для определения ширины экрана
  const detectWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  
  // для отслеживания ширины экрана
  useEffect(() => {
    window.addEventListener('resize', detectWidth)
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [windowWidth])

  // для удаления элемента по id
  const removeItem = (id) => {
    setItems(items.filter(oneItem => id !== oneItem.id))
    setFilteredItems(filteredItems.filter(oneFilteredItem => id !== oneFilteredItem.id))
  }

  // для обработки нажатия, если del - ф-ция удаления элемента
  const handleKeyPress = event => {
    const { code } = event;
    if (activeItem && (code === 'Backspace')) {
      removeItem(activeItem)
    }
  };

  // для отслеживания нажатия кнопки клавиатуры
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
      return () => {
        document.removeEventListener('keydown', handleKeyPress)
      }
  })

  const loadItems = () => {
    if (activeType === 'Show All') {
      setFilteredItems(items.slice(0, itemsOnPage + itemsStep))
    } else {
      const newItems = items.filter(item => item.type === activeType)
      setFilteredItems(newItems.slice(0, itemsOnPage + itemsStep))
    }
    setItemsOnPage(itemsOnPage + itemsStep)
  }

  return (
    <>
      <div className={classes.portfolioTitleDiv}>
        <p className={classes.portfolioTitle}>Portfolio</p>
        <p className={classes.portfolioDescription}>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
      <div className={classes.portfolioMenuDiv}>
        <PortfolioMenu showType={showType} activeType={activeType} types={types} windowWidth={windowWidth}/>
        
        <div className={classes.portfolioItems}>
          {filteredItems.map((item) => 
            <PortfolioItem item={item} key={item.id} activeItem={activeItem} activateItem={activateItem} showType={showType} />
          )}
        </div>
        <button onClick={loadItems} className={classes.portfolioLoadBtn}>LOAD MORE</button>
      </div>
    </>
  )
}
