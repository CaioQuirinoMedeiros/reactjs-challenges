import { HomeHero } from '../components/HomeHero'

import { CoffeeCard } from '../components/CoffeeCard'
import { coffees } from '../assets/coffes'

export function Home() {
  return (
    <main>
      <HomeHero />
      <section className='py-8'>
        <h2 className='title-l text-base-subtitle mb-14'>Nossos cafés</h2>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(18rem,1fr))] gap-8 justify-center'>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </div>
      </section>
    </main>
  )
}
