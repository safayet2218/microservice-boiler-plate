import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async updateStock(productId: number, quantity: number) {
    try {
      return await this.prisma.product.update({
        where: { id: productId },
        data: {
          stock: {
            decrement: quantity,
          },
        },
      });
    } catch (e) {
      console.error(`Failed to update stock for product ${productId}`, e);
    }
  }

  // Helper to seed some data
  async onModuleInit() {
    const count = await this.prisma.product.count();
    if (count === 0) {
      await this.prisma.product.createMany({
        data: [
          { name: 'Laptop', price: 1200, stock: 10 },
          { name: 'Mouse', price: 25, stock: 50 },
          { name: 'Keyboard', price: 75, stock: 30 },
        ],
      });
    }
  }
}
