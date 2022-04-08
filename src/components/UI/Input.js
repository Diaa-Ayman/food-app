import classes from './Input.module.css'
import React from 'react'
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes['ui-input']} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}:</label>
      <input ref={ref} {...props.input} onChange={props.getValue} />
    </div>
  )
})

export default Input
