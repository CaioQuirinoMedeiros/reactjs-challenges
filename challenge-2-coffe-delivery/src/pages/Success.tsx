import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Images } from '../assets'

export function Success() {
  return (
    <main className='py-8 flex flex-col'>
      <div className='flex flex-col gap-1 mb-10'>
        <h1 className='title-l text-yellow-dark text-center lg:text-left'>Uhu! Pedido confirmado</h1>
        <p className='text-l text-base-subtitle text-center lg:text-left'>
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-[6rem] justify-between'>
        <div className='rounded-tl-md rounded-tr-[2.25rem] rounded-br-md rounded-bl-[2.25rem] border-yellow flex flex-col gap-8 p-10 border grow lg:max-w-[33rem]'>
          <div className='flex flex-row items-center gap-3'>
            <div
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-[1rem] bg-purple`}
            >
              <MapPin />
            </div>
            <span className='text-m font-normal text-base-text'>
              Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
              <br />
              Farrapos - Porto Alegre, RS
            </span>
          </div>

          <div className='flex flex-row items-center gap-3'>
            <div
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-[1rem] bg-yellow`}
            >
              <Timer />
            </div>
            <span className='text-m font-normal text-base-text'>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </div>

          <div className='flex flex-row items-center gap-3'>
            <div
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-[1rem] bg-yellow-dark`}
            >
              <CurrencyDollar />
            </div>
            <span className='text-m font-normal text-base-text'>
              Pagamento na entrega
              <br />
              <strong>Cartão de crédito</strong>
            </span>
          </div>
        </div>

        <img src={Images.success} className='max-w-md self-center lg:max-w-lg' />
      </div>
    </main>
  )
}
