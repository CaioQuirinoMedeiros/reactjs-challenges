import { Trash, ShoppingCart } from 'phosphor-react'

import { PrimaryButton } from '../components/PrimaryButton'
import { SecondaryButton } from '../components/SecondaryButton'
import { IconButton } from '../components/IconButton'

export function Home() {
  return (
    <main>
      <h1 className='text-xs'>Home</h1>
      <div className='flex gap-2'>
        <PrimaryButton>LABEL</PrimaryButton>
        <SecondaryButton icon={Trash}>REMOVER</SecondaryButton>
        <IconButton icon={ShoppingCart} />
      </div>
    </main>
  )
}
