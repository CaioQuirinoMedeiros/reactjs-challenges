import { IconProps, ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { HeroContentItem } from './HeroContentItem'
import heroImage from '../assets/hero.png'

type ContentItem = {
  icon: React.ForwardRefExoticComponent<IconProps>
  text: string
  color: 'bg-yellow-dark' | 'bg-yellow' | 'bg-base-text' | 'bg-purple'
}

const contentItems: ContentItem[] = [
  {
    icon: ShoppingCart,
    text: 'Compra simples e segura',
    color: 'bg-yellow-dark'
  },
  {
    icon: Package,
    text: 'Embalagem mantém o café intacto',
    color: 'bg-base-text'
  },
  { icon: Timer, text: 'Entrega rápida e rastreada', color: 'bg-yellow' },
  { icon: Coffee, text: 'O café chega fresquinho até você', color: 'bg-purple' }
]

export function HomeHero() {
  return (
    <section className='flex flex-row items-center gap-14 '>
      <div className='flex flex-col'>
        <h1 className='title-xl mb-4 text-base-title'>
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className='text-l font-normal'>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className='grid grid-cols-2 gap-5 mt-[4rem] self-start'>
          {contentItems.map((contentItem) => {
            return <HeroContentItem key={contentItem.text} {...contentItem} />
          })}
        </div>
      </div>

      <img src={heroImage} className='hidden lg:block' />
    </section>
  )
}
