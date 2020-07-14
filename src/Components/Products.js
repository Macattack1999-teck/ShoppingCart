import React, { useContext } from 'react'
import Product from './Product'
import GrandTotalContext from '../Contexts/GrandTotalContext'
import TotalItemsContext from '../Contexts/TotalItemsContext'

export default () => {
  const data = [
    { productName: 'Pear', price: 3.48, quantity: 2, tax: 4.3 },
    { productName: 'Apple', price: 6.37, quantity: 8, tax: 2.9 },
    { productName: 'Orange', price: 1.52, quantity: 4, tax: 3.3 },
  ]

  const { grandTotal, setGrandTotal } = useContext(GrandTotalContext)
  const { totalItems, setTotalItems } = useContext(TotalItemsContext)
  let total = 0
  let initializing = true
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "space-evenly" }}>
      {
        data.map((product, idx) => {
          const {price, quantity, tax} = product
          total += price * quantity + (tax / 100)

          if (idx === data.length - 1 && initializing) {
            setGrandTotal(total)
            setTotalItems(data.length)
            initializing = false
          }

          return (
            <div key={idx} style={{ width: "80%", margin: "0 auto" }}>   
              <Product product={product} />
            </div>
          )
        })
      }
    </div>
  )
}