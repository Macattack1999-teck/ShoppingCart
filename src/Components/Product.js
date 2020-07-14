import React, { useContext, useState, useEffect } from 'react'

export default ({product}) => {
  const { productName, price, quantity, tax } = product

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "green", height: "60px", borderRadius: "5px" }}>
      <div style={{ width: "calc(100% / 5)", textAlign: "center" }}>
        Product: {productName}
      </div>

      <div style={{ width: "calc(100% / 5)", textAlign: "center" }}>
        Price: {price}
      </div>

      <div style={{ width: "calc(100% / 5)", textAlign: "center" }}>
        Quantity: {quantity}
      </div>

      <div style={{ width: "calc(100% / 5)", textAlign: "center" }}>
        Tax: {tax}
      </div>

      <div style={{ width: "calc(100% / 5)", textAlign: "center" }}>
        Total: {((price * quantity) + (tax / 100)).toFixed(2)}
      </div>
    </div>
  )
}