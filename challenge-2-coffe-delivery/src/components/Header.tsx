import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import logo from '../assets/react.svg'

export function Header() {
  return (
    <header className='flex flex-row items-center justify-center bg-red-200'>
      <img src={logo} alt='' />
      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  )
}
