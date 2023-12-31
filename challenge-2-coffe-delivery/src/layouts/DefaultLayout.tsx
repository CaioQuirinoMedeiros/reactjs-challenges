import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto px-6'>
        <Outlet />
      </div>
    </div>
  )
}
