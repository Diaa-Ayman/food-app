import React from 'react'
import CartIcon from './CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
const CartButton = (props) => {
  const ctx = useContext(CartContext)
  const { items } = ctx
  const amount = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  )
}
export default CartButton
