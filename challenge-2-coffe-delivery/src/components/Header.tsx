import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className='flex flex-row items-center justify-between h-[6.5rem] max-w-7xl mx-auto px-6'>
      <img src={logo} alt='' height="40px" />
      <nav className='flex flex row gap-3 items-center'>
        <button className='bg-purple-light h-8 flex flex-row gap-1 items-center px-2 rounded-md text-purple-dark min-w-[8rem] text-xs leading-[0] transition font-medium'>
          <MapPin className='text-purple text-sm' />
          Porto Alegre, RS
        </button>
        <NavLink to='/history' title='Histórico'>
          <div className='bg-yellow-light h-9 w-9 flex items-center justify-center rounded-md transition'>
            <ShoppingCart className='text-yellow-dark text-[1.375rem]' />
          </div>
        </NavLink>
      </nav>
    </header>
  )
}
