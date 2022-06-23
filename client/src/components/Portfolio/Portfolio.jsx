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
  ])
  // типы/категории элементов (можно брать из БД если есть)
  const [types, setTypes] = useState([
    { id: 1, name: 'Design'},
    { id: 2, name: 'Branding'},
    { id: 3, name: 'Illustration'},
    { id: 4, name: 'Motion'}
  ]) 
  const [filteredItems, setFilteredItems] = useState(items) // выбранные элементы
  const [activeType, setActiveType] = useState('Show All') // выбранный/активный тип
  const [activeItem, setactiveItem] = useState() // выбранный/активный элемент
  const [windowWidth, setWindowWidth] = useState(window.innerWidth) //ширина экрана

  // ф-ция выбора типа и "фильтрации" элементов по выбранному типу
  const showType = (type) => {
    if (type === 'Show All') {
      setFilteredItems(items)
      setActiveType('Show All')
    } else {
      setFilteredItems(items.filter(item => item.type === type))
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

  return (
    <>
      <div className={classes.portfolioTitleDiv}>
        <p className={classes.portfolioTitle}>Portfolio</p>
        <p className={classes.portfolioDescription}>Agency provides a full service range including technical skills, design, business understanding.</p>
      </div>
      <PortfolioMenu showType={showType} activeType={activeType} types={types} windowWidth={windowWidth}/>
      
      <div className={classes.portfolioItems}>
        {filteredItems.map((item) => 
          <PortfolioItem item={item} key={item.id} activeItem={activeItem} activateItem={activateItem} showType={showType} />
        )}
        
      </div>
    </>
  )
}
