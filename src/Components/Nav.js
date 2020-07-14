import React, { useContext } from 'react'
import TotalItemsContext from '../Contexts/TotalItemsContext'

export default () => {
  // #33363a lightDark
  // "#1d1d1d" dark
  // #f3aa4e Orange
  // rgb(100, 102, 106)
  const { totalItems } = useContext(TotalItemsContext)
  return (
    <div style={{ width: "100%", backgroundColor: "#33363a", height: "80px", }}>
      <div style={{ width: "80%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-evenly", height: "100%", backgroundColor: "#1d1d1d" }}>
        <div style={{ color: "#f3aa4e" }}>
          Shopping Cart
        </div>
        
        <div style={{ color: "#f3aa4e" }}>
          Total Items: {totalItems}
        </div>
      </div>
    </div>
  )
}