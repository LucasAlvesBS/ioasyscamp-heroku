import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  @IsNotEmpty()
  client: string;

  @IsString()
  @IsNotEmpty()
  adress: string;

  @IsNumber()
  @IsNotEmpty()
  orderPrice: number;
}
