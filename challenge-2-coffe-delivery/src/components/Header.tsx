import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../assets/logo.svg'
import { useCartContext } from '../contexts/CartContext'

export function Header() {
  const { cartItems } = useCartContext()

  return (
    <header className='flex flex-row items-center justify-between h-[6.5rem] max-w-7xl mx-auto px-6'>
      <NavLink to='/'>
        <img src={logo} alt='' height='40px' />
      </NavLink>
      <nav className='flex flex-row gap-3 items-center'>
        <button className='bg-purple-light h-[2.375rem] flex flex-row gap-1 items-center px-2 rounded-md text-purple-dark min-w-[8rem] text-xs leading-[0] transition font-medium'>
          <MapPin className='text-purple text-sm' />
          Porto Alegre, RS
        </button>
        <NavLink to='/checkout' title='Carrinho'>
          <div className='bg-yellow-light h-[2.375rem] w-[2.375rem] flex items-center justify-center rounded-md relative transition'>
            <ShoppingCart className='text-yellow-dark text-[1.375rem]' />
            {!!cartItems.length && (
              <div className='w-[1.25rem] h-[1.25rem] rounded-full bg-yellow-dark flex items-center justify-center text-white text-xs font-bold absolute top-[-0.6125rem] right-[-0.6125rem]'>
                {cartItems.length}
              </div>
            )}
          </div>
        </NavLink>
      </nav>
    </header>
  )
}
