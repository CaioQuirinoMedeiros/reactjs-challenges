import { immerable } from 'immer'

interface ProductConstructor {
  id: string
  name: string
  description: string
  price: number
  image: string
  tags?: string[]
}

export class Product {
  [immerable] = true

  id: string
  name: string
  description: string
  price: number
  image: string
  tags: string[]

  constructor(params: ProductConstructor) {
    this.id = params.id
    this.name = params.name
    this.description = params.description
    this.price = params.price
    this.image = params.image
    this.tags = params.tags ?? []
  }
}
