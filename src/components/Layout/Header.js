import React, { Fragment, useState } from 'react'
import CartButton from '../Cart/CartButton'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodMood</h1>
        <CartButton onClick={props.onShow} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  )
}

export default Header
