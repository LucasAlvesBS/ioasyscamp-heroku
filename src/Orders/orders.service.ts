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
    return `
    PARABÉEEEEEEEEEEEEEEEENSSSSSS, MAISINHA!!!!!!!!!!!! 
                          
    PIUUUUUUUUUUUUUUUUUUUUUUUUUU TRATRATRATRATRATRATRATRATRATRATRATRATRATRA POWWWWWWWWWW POUUUULLLLL
                                (SONS DE FOGOS DE ARTÍFICIOS)
    
    Muita saúde, paz, amor e sucesso na sua caminhada. Você é uma mulher FODA DEMAIS e é um grande exemplo, não só pra mim 
    como também para outras mulheres e outros profissionais da área de psicologia. 
    
    Hoje é um dia especial, hoje é o seu dia! Sonhe grande e conquiste seus sonhos, você é capaz de tudo. 
    Nunca deixe de acreditar em você, nunca deixe alguém dizer que você não pode, tá?
    Mas se, por ventura, você duvidar de si mesma, não se preocupe, eu sempre vou acreditar em você, não importa a situação!
    
    Ah, dê uma olhadinha no seu email. Deixei um textinho pra você. 

    Com amor, Lucas Alves.
    `;
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
