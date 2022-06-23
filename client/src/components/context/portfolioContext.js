import { createContext, useState } from "react";

export const PortfolioContext = createContext()


function PortfolioContextProvider({ children }) {
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
  const [needLoad, setNeedLoad] = useState(true)
  
 

  // ф-ция выбора типа и "фильтрации" элементов по выбранному типу
  const showType = (type) => {
    setItemsOnPage(itemsStep) // при переходе между типами обнуляем кол-во показываемых эл-тов до дефолта
    if (type === 'Show All') {
      setFilteredItems(items.slice(0, itemsStep))
      setActiveType('Show All') // выбираем тип
      if (items.length <= (itemsStep)) {
        setNeedLoad(false) // убираем кнопку загрузки если все возможные эл-ты типа уже на странице
      } else {
        setNeedLoad(true)
      }
    } else {
      const newItems = items.filter(item => item.type === type)
      setFilteredItems(newItems.slice(0, itemsStep))
      setActiveType(type)
      if (newItems.length <= itemsStep) {
        setNeedLoad(false)
      } else {
        setNeedLoad(true)
      }
      console.log(newItems.length, itemsOnPage);
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

  // для "подгрузки" следующих эл-тов
  const loadItems = () => {
    if (activeType === 'Show All') {
      setFilteredItems(items.slice(0, itemsOnPage + itemsStep))
      if (items.length <= (itemsOnPage + itemsStep)) {
        setNeedLoad(false)
      }
    } else {
      const newItems = items.filter(item => item.type === activeType)
      setFilteredItems(newItems.slice(0, itemsOnPage + itemsStep))
      if (newItems.length <= (itemsOnPage + itemsStep)) {
        setNeedLoad(false)
      }
    }
    setItemsOnPage(itemsOnPage + itemsStep)
  }

  return <PortfolioContext.Provider 
  value={{
    items, setItems, 
    types, setTypes,
    itemsStep, setItemsStep,
    itemsOnPage, setItemsOnPage,
    filteredItems, setFilteredItems, 
    activeType, setActiveType, 
    activeItem, setactiveItem, 
    windowWidth, setWindowWidth, 
    needLoad, setNeedLoad, 
    showType, activateItem, detectWidth, removeItem, handleKeyPress, loadItems
  }}
  >
    {children}
  </PortfolioContext.Provider>
}



export { PortfolioContextProvider }
