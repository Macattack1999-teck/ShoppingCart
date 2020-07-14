import React, {useState} from 'react'
import TotalItemsContext from '../Contexts/TotalItemsContext'

export default (props) => {
  const [totalItems, setTotalItems] = useState(0)

  const state = {
    totalItems,
    setTotalItems
  }
  return (
    <TotalItemsContext.Provider value={state}>
      {props.children}
    </TotalItemsContext.Provider>
  )
}
