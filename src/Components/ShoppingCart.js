import React, {useContext} from 'react'
import Products from './Products'
import GrandTotalContext from '../Contexts/GrandTotalContext'

export default () => {
  // #33363a lightDark
  // "#1d1d1d" dark
  // #f3aa4e Orange
  // rgb(100, 102, 106)
  const { grandTotal } = useContext(GrandTotalContext)
  return (
    <div style={{ height: "calc(100vh - 160px)", backgroundColor: "white" }}>
      <div style={{ height: "90%", alignItems: "center", justifyContent: "center" }}>
        <Products />

        <div style={{ height: "10%", width: "80%", margin: "0 auto", display: "flex", justifyContent: "flex-end" }}>
          Grand Total: {grandTotal.toFixed(2)}
        </div>
      </div>
    </div>
  )
}