import React, {useState} from 'react'
import GrandTotalContext from '../Contexts/GrandTotalContext'

export default (props) => {
  const [grandTotal, setGrandTotal] = useState(0)

  const state = {
    grandTotal,
    setGrandTotal
  }

  return (
    <GrandTotalContext.Provider value={state}>
      {props.children}
    </GrandTotalContext.Provider>
  )
}

