import { Images } from '../assets'

export function Header() {
  return (
    <header className='flex flex-row items-center justify-between mx-auto z-0'>
      <img src={Images.cover} className='w-full min-h-[250px] object-cover' />
    </header>
  )
}
