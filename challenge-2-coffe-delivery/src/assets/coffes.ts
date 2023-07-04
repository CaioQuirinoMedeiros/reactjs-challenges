import { Images } from '.'
import { Product } from '../models/Product'

export const coffees: Product[] = [
  new Product({
    id: 'A',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: Images.coffees.expresso,
    price: 9.99,
    tags: ['TRADICIONAL']
  }),
  new Product({
    id: 'B',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: Images.coffees.americano,
    price: 9.5,
    tags: ['TRADICIONAL']
  }),
  new Product({
    id: 'C',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: Images.coffees.expresso_cremoso,
    price: 12.99,
    tags: ['TRADICIONAL']
  }),
  new Product({
    id: 'D',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: Images.coffees.cafe_gelado,
    price: 5,
    tags: ['TRADICIONAL', 'GELADO']
  }),
  new Product({
    id: 'E',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: Images.coffees.cafe_com_leite,
    price: 10.29,
    tags: ['TRADICIONAL', 'COM LEITE']
  }),
  new Product({
    id: 'F',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: Images.coffees.latte,
    price: 8.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  }),
  new Product({
    id: 'G',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espumaa',
    image: Images.coffees.capuccino,
    price: 5.1,
    tags: ['TRADICIONAL', 'COM LEITE']
  }),
  new Product({
    id: 'H',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espumaa',
    image: Images.coffees.macchiato,
    price: 9.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  }),
  new Product({
    id: 'I',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: Images.coffees.mochaccino,
    price: 19.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  }),
  new Product({
    id: 'J',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: Images.coffees.chocolate_quente,
    price: 7.99,
    tags: ['ESPECIAL', 'COM LEITE']
  }),
  new Product({
    id: 'K',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: Images.coffees.cubano,
    price: 8.99,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'COM LEITE']
  }),
  new Product({
    id: 'L',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: Images.coffees.havaiano,
    price: 10.49,
    tags: ['ESPECIAL']
  }),
  new Product({
    id: 'M',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: Images.coffees.arabe,
    price: 9.99,
    tags: ['ESPECIAL']
  }),
  new Product({
    id: 'N',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: Images.coffees.latte,
    price: 20,
    tags: ['ESPECIAL', 'ALCOÓLICO']
  })
]
