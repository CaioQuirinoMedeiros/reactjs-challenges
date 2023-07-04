import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useCartContext } from '../contexts/CartContext'
import { CartListItem } from '../components/CartListItem'
import { formatCurrency } from '../utils/formatCurrency'
import { PrimaryButton } from '../components/PrimaryButton'
import { CheckoutForm } from '../components/CheckoutForm'

const checkoutFormValidationSchema = zod.object({
  cep: zod
    .string()
    .regex(/\d{8}/, 'Informe o CEP (apenas números)')
    .max(8, 'Informe um CEP válido (apenas números)'),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.coerce.number({ required_error: 'Informe o Número' }),
  complemento: zod.string().optional(),
  bairro: zod
    .string({ required_error: 'Informe o Bairro' })
    .min(1, 'Informe o bairro'),
  cidade: zod
    .string({ required_error: 'Informe a Cidade' })
    .min(1, 'Informe a Cidade'),
  uf: zod.string({ required_error: 'Informe a UF' }).length(2, 'Sigla UF'),
  paymentMethod: zod.enum(['CREDIT_CARD', 'DEBIT_CARD', 'CASH'])
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

const deliveryPrice = 3.5

export function Checkout() {
  const { cartItems, totalCartPrice, clearCart } = useCartContext()
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: undefined,
      rua: '',
      uf: '',
      paymentMethod: undefined
    },
    resolver: zodResolver(checkoutFormValidationSchema)
  })

  const { reset, handleSubmit } = checkoutForm

  function handleConfirmOrder() {
    navigate('/success')
    reset()
    clearCart()
  }

  return (
    <main className='py-8 flex flex-col lg:flex-row gap-8'>
      <section>
        <h2 className='title-xs text-base-subtitle mb-4'>
          Complete seu pedido
        </h2>
        <FormProvider {...checkoutForm}>
          <CheckoutForm />
        </FormProvider>
      </section>

      <section>
        <h2 className='title-xs text-base-subtitle mb-4'>Cafés selecionados</h2>
        <div className='flex flex-col bg-base-card rounded-tl-md rounded-tr-[2.25rem] rounded-br-md rounded-bl-[2.25rem] p-10 w-full min-w-[28rem]'>
          {cartItems.map((cartItem) => {
            return (
              <div key={cartItem.product.id}>
                <CartListItem cartItem={cartItem} />
                <hr className='my-6' />
              </div>
            )
          })}

          <div className='flex flex-col gap-3'>
            <div className='flex flex-row items-center justify-between text-base-text'>
              <span className='text-s'>Total de itens</span>
              <span className='text-m'>{formatCurrency(totalCartPrice)}</span>
            </div>
            <div className='flex flex-row items-center justify-between text-base-text'>
              <span className='text-s'>Entrega</span>
              <span className='text-m'>{formatCurrency(deliveryPrice)}</span>
            </div>
            <div className='flex flex-row items-center justify-between text-base-subtitle'>
              <span className='text-l font-bold'>Total</span>
              <span className='text-l font-bold'>
                {formatCurrency(totalCartPrice + deliveryPrice)}
              </span>
            </div>
          </div>

          <PrimaryButton
            className='mt-6'
            onClick={handleSubmit(handleConfirmOrder)}
          >
            CONFIRMAR PEDIDO
          </PrimaryButton>
        </div>
      </section>
    </main>
  )
}
