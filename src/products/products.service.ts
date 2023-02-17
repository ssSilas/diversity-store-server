import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { buyProductsDto, createProductsDto } from 'utils/dto/products.dto';
import { salesHistoryEntity } from 'src/sales-history/sales-history.entity';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject("ProductsEntity")
    private productsRepo: typeof ProductsEntity,

    @Inject("salesHistoryEntity")
    private salesRepo: typeof salesHistoryEntity
  ) { }

  async allProducts(): Promise<ProductsEntity[]> {
    return await this.productsRepo.findAll()
  }

  async createProduct(data: createProductsDto): Promise<ProductsEntity> {
    return await this.productsRepo.create({ ...data })
  }

  async deleteProduct(id: number): Promise<number> {
    return await this.productsRepo.destroy({
      where: { id }
    })
  }

  async updateProduct(id: number, data: createProductsDto): Promise<[affectedCount: number]> {
    return await this.productsRepo.update(
      { ...data },
      { where: { id } }
    )
  }

  async buyProduct(buyParam: buyProductsDto, userfk: number) {
    const product = await this.getProduct(buyParam.id)
    const subtractQuantities = product.quantity - buyParam.quantity

    if (subtractQuantities < 0) {
      throw new BadRequestException({ 
        error: `Quantidade indisponivel. Quantidade atual: ${product.quantity}` 
      })
    }

    //update quantity of products
    await this.productsRepo.update(
      { quantity: subtractQuantities },
      { where: { id: buyParam.id } }
    )

    const createSaleHistoric = await this.salesRepo.create({
      productfk: buyParam.id,
      userfk,
      quantity: buyParam.quantity
    })

    return createSaleHistoric
  }

  async getProduct(id: number) {
    const get = await this.productsRepo.findOne({
      where: { id }
    })

    if (!get) {
      throw new BadRequestException({
        error: "Product não encontrado!"
      })
    }
    return get
  }
}
