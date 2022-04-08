import CartContext from './cart-context'
import { useReducer } from 'react'
const defaultCartState = {
  items: [],
  totalAmount: 0,
  orderDone: false,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const exisitingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const exisitingItem = state.items[exisitingItemIndex]
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price
    let updatedItems
    if (exisitingItem) {
      const updatedItem = {
        ...exisitingItem,
        amount: exisitingItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[exisitingItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      orderDone: state.orderDone,
    }
  }
  if (action.type === 'REMOVE') {
    const exisitingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )
    const exisitingItem = state.items[exisitingItemIndex]
    const updatedTotalAmount = state.totalAmount - exisitingItem.price

    let updatedItems
    if (exisitingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id)
    } else {
      const updatedItem = { ...exisitingItem, amount: exisitingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[exisitingItemIndex] = updatedItem
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      orderDone: state.orderDone,
    }
  }
  if (action.type === 'DONE') {
    const updatedOrderDone = true
    return {
      items: state.items,
      totalAmount: state.totalAmount,
      orderDone: updatedOrderDone,
    }
  }
  if (action.type === 'CLEAR') {
    return defaultCartState
  }
  return defaultCartState
}
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item })
  }
  const removeFromCartHanlder = (id) => {
    dispatchCartAction({ type: 'REMOVE', id })
  }
  const makeOrderDoneHandler = () => {
    dispatchCartAction({ type: 'DONE' })
  }
  const clearCart = () => {
    dispatchCartAction({ type: 'CLEAR' })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    orderDone: cartState.orderDone,
    makeOrderDone: makeOrderDoneHandler,
    addItem: addItemToCartHandler,
    removeItem: removeFromCartHanlder,
    clear: clearCart,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
