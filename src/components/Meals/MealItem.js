import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const MealItem = (props) => {
  const { id, title, desc, price } = props.meal
  const ctx = useContext(CartContext)
  const addItemToCartHandler = (amount) => {
    ctx.addItem({
      id,
      title,
      desc,
      price,
      amount,
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{title}</h3>
        <p className={classes.description}>{desc}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
