import { ShoppingCartSimple } from 'phosphor-react'
import { IconButton } from './IconButton'
import { InputNumber } from './InputNumber'
import { useCartContext } from '../contexts/CartContext'
import { Product } from '../models/Product'

interface CoffeeCardProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  coffee: Product
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { coffee, className, ...rest } = props

  const { cartItems, addOneProduct, removeOneProduct } = useCartContext()

  const quantityInCart = cartItems.reduce((acc, cartItem) => {
    if (cartItem.product.id === coffee.id) {
      return cartItem.quantity
    } else {
      return acc
    }
  }, 0)

  function handleIncreaseOnCart() {
    addOneProduct(coffee)
  }

  function handleDecreaseOnCart() {
    removeOneProduct(coffee.id)
  }

  return (
    <div
      className={`flex flex-col items-center bg-base-card rounded-tl-md rounded-tr-[2.25rem] rounded-br-md rounded-bl-[2.25rem] p-5 ${className}`}
      {...rest}
    >
      <img src={coffee.image} className='w-[7.5rem] mt-[-2.5rem] mb-3' />
      <div className='flex flex-row gap-1 mb-4'>
        {coffee.tags.map((tag) => {
          return (
            <span
              key={`${coffee.id}-${tag}`}
              className='bg-yellow-light text-yellow-dark py-1 px-2 rounded-full font-bold text-[0.625rem]'
            >
              {tag}
            </span>
          )
        })}
      </div>

      <strong className='title-s text-center text-base-subtitle mb-2'>
        {coffee.name}
      </strong>
      <p className='text-s text-base-label text-center'>{coffee.description}</p>

      <footer className='mt-8 flex flex-row items-center self-stretch mx-1'>
        <span className='title-m text-base-text mr-auto'>
          <span className='text-s'>R$ </span>
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2
          }).format(coffee.price)}
        </span>
        <div className='flex flex-row gap-2'>
          {!!quantityInCart && (
            <InputNumber
              value={quantityInCart}
              onIncrease={handleIncreaseOnCart}
              onDecrease={handleDecreaseOnCart}
            />
          )}
          <IconButton
            icon={ShoppingCartSimple}
            onClick={handleIncreaseOnCart}
          />
        </div>
      </footer>
    </div>
  )
}
