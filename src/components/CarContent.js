import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  
  return <Wrapper className='section section-center'>
<CartColumns/>
{cart.map((item) => { return <CartItem {...item} key={item.id}></CartItem> })}
<hr />
<div className="link-container">
  <Link to={'/products'} className='btn'> continue shopping</Link>
  <button className='clear-btn link-btn' type='button' onClick={clearCart}>clear cart</button>
</div>
<CartTotals></CartTotals>
  </Wrapper>
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent