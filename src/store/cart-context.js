import React from 'react'

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  orderDone: false,
  makeOrderDone: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  clear: () => {},
})

export default CartContext
