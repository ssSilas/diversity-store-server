import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'utils/custom-decorator/auth.guard';
import { Roles } from 'utils/custom-decorator/roles.decorator';
import { User } from 'utils/custom-decorator/user.decorator';
import { buyProductsDto, createProductsDto } from 'utils/dto/products.dto';
import { ProductsService } from './products.service';
@ApiTags('products')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  @ApiOperation({ 
    summary: 'Somente usuário com role tipo "client" pode acessar',
  })
  @Roles('client')
  async allProducts() {
    return await this.productsService.allProducts()
  }

  @Post('create')
  @Roles('admin')
  async createProduct(@Body() body: createProductsDto) {
    return await this.productsService.createProduct(body)
  }

  @Roles('admin')
  @Delete('delete')
  async deleteProduct(@Param('id') id: number) {
    return await this.productsService.deleteProduct(id)
  }

  @Roles('admin')
  @Put('update')
  async updateProduct(@Query('id') id: number, @Body() body: createProductsDto) {
    return await this.productsService.updateProduct(id, body)
  }

  @Roles('client')
  @Put('buy')
  async buyProduct(@Query() buyParam: buyProductsDto, @User('user') user) {
    try {
      return await this.productsService.buyProduct(buyParam, user.id)
    } catch (error) {
      throw error
    }
  }
}
