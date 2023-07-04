import { Trash } from 'phosphor-react'
import { InputNumber } from './InputNumber'
import { useCartContext } from '../contexts/CartContext'
import { CartItem } from '../models/CartItem'
import { SecondaryButton } from './SecondaryButton'
import { formatCurrency } from '../utils/formatCurrency'

interface CartListItemProps {
  cartItem: CartItem
}

export function CartListItem(props: CartListItemProps) {
  const { cartItem } = props

  const { addOneProduct, removeOneProduct, removeProduct } = useCartContext()

  const product = cartItem.product

  function handleIncreaseOnCart() {
    addOneProduct(product)
  }

  function handleDecreaseOnCart() {
    removeOneProduct(product.id)
  }

  function handleRemoveFromCart() {
    removeProduct(product.id)
  }

  return (
    <div className='flex flex-row py-2 px-1'>
      <img src={product.image} className='w-[4rem] mr-5' />

      <div className='flex flex-col flex-1'>
        <strong className='text-m text-base-subtitle font-normal mb-2'>
          {product.name}
        </strong>
        <div className='flex flex-row h-8 gap-2'>
          <InputNumber
            value={cartItem.quantity}
            onIncrease={handleIncreaseOnCart}
            onDecrease={handleDecreaseOnCart}
          />
          <SecondaryButton icon={Trash} onClick={handleRemoveFromCart}>
            REMOVER
          </SecondaryButton>
        </div>
      </div>

      <span className='text-base-text font-bold'>
        {formatCurrency(cartItem.totalPrice)}
      </span>
    </div>
  )
}
