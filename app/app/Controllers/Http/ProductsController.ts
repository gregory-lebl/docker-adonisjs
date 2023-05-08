// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'

export default class ProductsController {
  public async index() {
    return Database.query().from('products').select('*')
  }
  public async store({ request }) {
    const product_name = request.input('product_name')
    const product_description = request.input('product_description')
    const product_price = request.input('product_price')

    const product = await Database.table('products').insert({
      product_name,
      product_description,
      product_price,
    })

    return product
  }
}
