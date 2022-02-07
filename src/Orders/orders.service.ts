import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { CreateOrderDTO } from './dto/create.order.dto';
import { UpdateOrderDTO } from './dto/update.order.dto';
import { Order } from './Entity/order.entity';

@Injectable()
export class OrdersService {
  private database: Order[] = [];

  create(createOrderDTO: CreateOrderDTO) {
    const newOrder = {
      id: uuidV4(),
      ...createOrderDTO,
    };

    this.database.push(newOrder);
    return newOrder;
  }

  findAll() {
    return this.database;
  }

  findOne(id: string) {
    return this.database.find((item) => item.id === id);
  }

  update(id: string, updateOrderDTO: UpdateOrderDTO) {
    const index = this.database.findIndex((item) => item.id === id);
    const order = this.database.find((item) => item.id === id);

    const updateOrder = {
      ...order,
      ...updateOrderDTO,
    };

    this.database[index] = updateOrder;
    return this.database[index];
  }

  remove(id: string) {
    this.database = this.database.filter((item) => item.id !== id);
  }
}
