import classes from './OrderForm.module.css'
import Card from '../UI/Card'
import Input from '../UI/Input'
import { useState, useRef } from 'react'

const isEmpty = (value) => value.trim() === ''
const equalToFiveChars = (value) => value.trim().length === 5
const OrderForm = (props) => {
  const [formValidity, setFormValidity] = useState({
    validName: true,
    validAddress: true,
    validPhone: true,
  })

  const nameRef = useRef()
  const addressRef = useRef()
  const phoneRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const name = nameRef.current.value
    const address = addressRef.current.value
    const phone = phoneRef.current.value
    // console.log(name + ' ' + address + ' ' + phone)
    const nameIsValid = !isEmpty(name)
    const addressIsValid = !isEmpty(address)
    const phoneNumberIsValid = equalToFiveChars(phone)

    setFormValidity({
      validName: nameIsValid,
      validAddress: addressIsValid,
      validPhone: phoneNumberIsValid,
    })

    const formIsValid = nameIsValid && addressIsValid && phoneNumberIsValid

    if (!formIsValid) {
      return
    }
    // complete sending data to backEnd....
    props.onConfirm({
      name,
      address,
      phone,
    })
  }

  const nameClassControl = formValidity.validName
    ? classes.input
    : `${classes.input} ${classes.invalid}`
  const addressClassControl = formValidity.validAddress
    ? classes.input
    : `${classes.input} ${classes.invalid}`
  const phoneClassControl = formValidity.validAddress
    ? classes.input
    : `${classes.input} ${classes.invalid}`
  return (
    <Card className={classes['order-card']}>
      <form className={classes['order-form']} onSubmit={submitHandler}>
        <Input
          ref={nameRef}
          label='name'
          id='name'
          input={{ type: 'text' }}
          className={nameClassControl}
        />
        {!formValidity.validName && (
          <p className={classes['invalid-message']}>Please Enter your name!</p>
        )}
        <Input
          ref={addressRef}
          label='address'
          id='address'
          input={{ type: 'text' }}
          className={addressClassControl}
        />
        {!formValidity.validAddress && (
          <p className={classes['invalid-message']}>
            Please Enter your address!
          </p>
        )}
        <Input
          ref={phoneRef}
          label='phone-number'
          id='phoneNumber'
          input={{ type: 'tel' }}
          className={phoneClassControl}
        />
        {!formValidity.validPhone && (
          <p className={classes['invalid-message']}>not a phone number!</p>
        )}
        <button className={classes.orderBtn}>Submit</button>
      </form>
    </Card>
  )
}

export default OrderForm
