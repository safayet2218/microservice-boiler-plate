import { Injectable, OnModuleInit } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';
import { CreateProductDto, throwRpcError } from '@app/shared';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateProductDto) {
    try {
      return await this.prisma.product.create({
        data,
      });
    } catch (error) {
      throwRpcError('Could not create product', 400);
    }
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async updateStock(productId: number, quantity: number) {
    try {
      const product = await this.prisma.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throwRpcError('Product not found', 404);
      }

      if (product.stock < quantity) {
        throwRpcError('Insufficient stock', 400);
      }

      return await this.prisma.product.update({
        where: { id: productId },
        data: {
          stock: {
            decrement: quantity,
          },
        },
      });
    } catch (error) {
      if (error instanceof RpcException) throw error;
      throwRpcError(`Failed to update stock for product ${productId}`, 500);
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
