import React from 'react'

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  orderDone: false,
  makeOrderDone: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  submit: () => {},
})

export default cartContext
