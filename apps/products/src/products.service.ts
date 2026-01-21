import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  async findAll() {
    return this.productRepository.find();
  }

  async updateStock(productId: number, quantity: number) {
    const product = await this.productRepository.findOne({ where: { id: productId } });
    if (product) {
      product.stock -= quantity;
      return this.productRepository.save(product);
    }
  }

  // Helper to seed some data
  async onModuleInit() {
    const count = await this.productRepository.count();
    if (count === 0) {
      await this.productRepository.save([
        { name: 'Laptop', price: 1200, stock: 10 },
        { name: 'Mouse', price: 25, stock: 50 },
        { name: 'Keyboard', price: 75, stock: 30 },
      ]);
    }
  }
}
