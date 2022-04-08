import React, { useState, useContext, useEffect } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import OrderDone from './components/orderDone/OrderDone'
import OrderForm from './components/OrderForm/OrderForm'
import CartContext from './store/cart-context'
import CartProvider from './store/CartProvider'

function App() {
  const [done, setDone] = useState(false)
  const [show, setShow] = useState(false)
  const showCartHandler = () => {
    setShow(true)
  }
  const closeCartHandler = () => {
    setShow(false)
  }
  const orderDoneHandler = () => {
    setDone(true)
  }

  const handlingErrors = (error) => {
    
  }
  useEffect(() => {
    const doneTimeout = setTimeout(() => {
      setDone(false)
    }, 2500)

    return () => {
      clearTimeout(doneTimeout)
    }
  }, [done])
  return (
    <CartProvider>
      {done && <OrderDone />}
      {show && <Cart onClose={closeCartHandler} onDone={orderDoneHandler} />}
      <Header onShow={showCartHandler} />
      <Meals />

      {/* <OrderForm /> */}
    </CartProvider>
  )
}

export default App
