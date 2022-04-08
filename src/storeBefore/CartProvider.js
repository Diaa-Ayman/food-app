import CartContext from './cart-context'
import { useReducer } from 'react'

const cartInitialState = {
  items: [],
  totalAmount: 0,
  orderDone: false,
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const exisitingCartItem = state.items[exisitingCartItemIndex]
    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[exisitingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
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
      const updatedItem = {
        ...exisitingItem,
        amount: exisitingItem.amount - 1,
      }
      updatedItems = [...state.items]
      updatedItems[exisitingItemIndex] = updatedItem
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }

  if (type.action === 'DONE') {
    const updatedOrderDone = true
    return {
      items: state.items,
      totalAmount: state.totalAmount,
      orderDone: updatedOrderDone,
    }
  }
  if (type.action === 'CLEAR') {
    return cartInitialState
  }
  return cartInitialState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    cartInitialState
  )
  const addItemToCartHandler = (mealItem) => {
    dispatchCartAction({ type: 'ADD', item: mealItem })
  }
  const removerItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }
  const makeOrderDoneHandler = () => {
    dispatchCartAction({ type: 'DONE' })
  }
  const submitOrderHandler = () => {
    dispatchCartAction({ type: 'CLEAR' })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    makeOrderDone: makeOrderDoneHandler,
    addItem: addItemToCartHandler,
    removeItem: removerItemFromCartHandler,
    submit: submitOrderHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
