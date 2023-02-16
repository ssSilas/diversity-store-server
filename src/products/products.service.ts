import { Inject, Injectable } from '@nestjs/common';
import { createProductsDto } from 'helpers/dto/products.dto';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject("ProductsEntity")
    private productsRepo: typeof ProductsEntity
  ) { }

  async allProducts(){
    return await this.productsRepo.findAll()
  }
  
  async createProduct(data: createProductsDto) {
    return await this.productsRepo.create({ ...data })
  }

  async deleteProduct(id: number) {
    return await this.productsRepo.destroy({
      where: { id }
    })
  }

  async updateProduct(id: number, data: createProductsDto) {
    return await this.productsRepo.update(
      { ...data },
      { where: { id } })
  }
}
