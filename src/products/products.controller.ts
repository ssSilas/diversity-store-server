import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { createProductsDto } from 'helpers/dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async allProducts() {
    return await this.productsService.allProducts()
  }
  @Post('create')
  async createProduct(@Body() body: createProductsDto) {
    return await this.productsService.createProduct(body)
  }

  @Delete('delete')
  async deleteProduct(@Param('id') id: number) {
    return await this.productsService.deleteProduct(id)
  }

  @Put('update')
  async updateProduct(@Query('id') id: number, @Body() body: createProductsDto) {
    return await this.productsService.updateProduct(id, body)
  }
}
