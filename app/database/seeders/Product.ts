import { faker } from '@faker-js/faker'
import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run() {
    for (let index = 0; index < 100; index++) {
      await Database.table('products').insert({
        product_name: faker.commerce.productName(),
        product_description: faker.commerce.productDescription(),
        product_price: faker.commerce.price(),
      })
    }
  }
}
