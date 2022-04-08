import React, { Fragment, useContext, useState } from 'react'
import Card from '../UI/Card'
import CartItem from './CartItem.js'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import OrderForm from '../OrderForm/OrderForm'

const Cart = (props) => {
  const ctx = useContext(CartContext)
  const { items, totalAmount } = ctx
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const theTotalAmount = `$${totalAmount.toFixed(2)}`
  const hasItems = items.length > 0

  const addItemToCartHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 })
  }
  const removeItemFromCartHandler = (id) => {
    ctx.removeItem(id)
  }

  const submitDataHandler = async (userData) => {
    setIsSubmitting(true)

    const meals = ctx.items.map((item) => {
      const name = item.title
      const amount = item.amount
      return [amount, name]
    })
    const response = await fetch(
      'https://againredux-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          order: meals,
        }),
      }
    )

    setIsSubmitting(false)
    setSubmitted(true)
    ctx.clear()
  }

  const cartItems = (
    <ul className={classes.cart}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          amount={item.amount}
          price={item.price}
          onAdd={addItemToCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  )

  const defaultModal = (
    <Fragment>
      <div className={classes.scroll}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{theTotalAmount}</span>
        </div>
        <OrderForm onConfirm={submitDataHandler} />
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Fragment>
  )

  const didSubmittedModal = (
    <Fragment>
      <div>
        <p>
          Your order is sent successfully. You will reseve the order after 30
          min from now
        </p>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  )
  const onSubmittingModal = <p>ON SENDING ORDER....</p>
  return (
    <Modal onClose={props.onClose}>
      {isSubmitting && !submitted && onSubmittingModal}
      {submitted && didSubmittedModal}
      {!isSubmitting && !submitted && defaultModal}
    </Modal>
  )
}

export default Cart
