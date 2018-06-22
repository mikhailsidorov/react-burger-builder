import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false


  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'John Doe',
        address: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'US'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order).then(
      response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      }).catch(error => {
        this.setState({ loading: false })
      })
  }

  render() {
    let form = (<form>
      <input className={classes.Input} type="text" name="name" placeholder="Your name" />
      <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
      <input className={classes.Input} type="text" name="street" placeholder="Street" />
      <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>)
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default withRouter(ContactData)