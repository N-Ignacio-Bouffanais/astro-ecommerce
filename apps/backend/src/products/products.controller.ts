import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getProducts(){
    return this.productService.getProducts()
  }

}
