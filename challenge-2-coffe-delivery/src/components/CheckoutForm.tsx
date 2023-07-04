import { Bank, CreditCard, MapPin, Money, CurrencyDollar } from 'phosphor-react'
import { useFormContext, Controller } from 'react-hook-form'

import { InputText } from '../components/InputText'
import { CheckoutFormData } from '../pages/Checkout'
import { InputSelect, Option } from './InputSelect'

type PaymentMethod = 'CREDIT_CARD' | 'DEBIT_CARD' | 'CASH'

const paymentOptions: Array<Option<PaymentMethod>> = [
  { value: 'CREDIT_CARD', label: 'CARTÃO DE CRÉDITO', icon: CreditCard },
  { value: 'DEBIT_CARD', label: 'CARTÃO DE DÉBITO', icon: Bank },
  { value: 'CASH', label: 'CARTÃO DE CRÉDITO', icon: Money }
]

export function CheckoutForm() {
  const { register, control, formState } = useFormContext<CheckoutFormData>()

  return (
    <form className='flex-1 flex flex-col gap-3'>
      <div className='flex flex-col bg-base-card rounded-md p-10'>
        <div className='flex flex-row'>
          <MapPin className='text-yellow-dark text-[1.375rem] mr-2' />
          <div className='flex flex-col'>
            <h3 className='text-m text-base-subtitle'>Endereço de Entrega</h3>
            <p className='text-s text-base-text'>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-4 mt-8'>
          <InputText
            placeholder='CEP'
            errorMessage={formState.errors.cep?.message}
            {...register('cep')}
          />
          <InputText
            placeholder='Rua'
            errorMessage={formState.errors.rua?.message}
            {...register('rua')}
          />
          <div className='flex flex-row gap-3'>
            <InputText
              className='w-[5rem]'
              placeholder='Número'
              errorMessage={formState.errors.numero?.message}
              {...register('numero')}
            />
            <InputText
              className='grow'
              placeholder='Complemento'
              errorMessage={formState.errors.complemento?.message}
              {...register('complemento')}
            />
          </div>
          <div className='flex flex-row gap-3'>
            <InputText
              className='grow-[1]'
              placeholder='Bairro'
              errorMessage={formState.errors.bairro?.message}
              {...register('bairro')}
            />
            <InputText
              className='grow-[1]'
              placeholder='Cidade'
              errorMessage={formState.errors.cidade?.message}
              {...register('cidade')}
            />
            <InputText
              className='w-[4rem]'
              placeholder='UF'
              errorMessage={formState.errors.uf?.message}
              {...register('uf')}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-base-card rounded-md p-10'>
        <div className='flex flex-row'>
          <CurrencyDollar className='text-purple text-[1.375rem] mr-2' />
          <div className='flex flex-col'>
            <h3 className='text-m text-base-subtitle'>Pagamento</h3>
            <p className='text-s text-base-text'>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <Controller
          name='paymentMethod'
          control={control}
          render={({ field }) => {
            return (
              <InputSelect
                className='mt-8 flex-col sm:flex-row'
                isError={!!formState.errors.paymentMethod?.message}
                options={paymentOptions}
                selected={field.value}
                onChangeSelected={field.onChange}
              />
            )
          }}
        />
      </div>
    </form>
  )
}
