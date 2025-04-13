import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
export type FlowerDocument = HydratedDocument<FlowerClass>;

/*
Букет #45nd94: Природная гармония
Повод: Домашний декор, подарок дизайнеру, благодарность
Настроение: Спокойствие, стиль, минимализм
Цветовая гамма: Песочная, зелёная, белая
Состав: Хлопок, сухоцветы, зелень
Стиль: Эко, бохо, минимализм
Кому дарится: Унисекс, паре, дизайнеру, коллегам
Сезон: Осень, зима
Размер: Средний
Особенности: Долго хранится, не требует воды, экологичный стиль
*/


@Schema()
export class FlowerClass {
  // Природная гармония
  @Prop({
    type: String
  })
  name: string

  // Повод: Домашний декор, подарок дизайнеру, благодарность
  @Prop({
    type: String
  })
  reason: string // повод

  // Настроение: Спокойствие, стиль, минимализм
  @Prop({
    type: String
  })
  mood: string // настроение

  // Цветовая гамма: Песочная, зелёная, белая
  @Prop({
    type: String
  })
  colorScheme: string

  // Состав: Хлопок, сухоцветы, зелень
  @Prop({
    type: String
  })
  flowersIncluded: string

  // Стиль: Эко, бохо, минимализм
  @Prop({
    type: String
  })
  style: string

  // Кому дарится: Унисекс, паре, дизайнеру, коллегам
  @Prop({
    type: String
  })
  possibleRecipient: string // кому дарится

  // Сезон: Осень, зима
  @Prop({
    type: String
  })
  season: string // время года, сезон

  // Размер: Средний
  @Prop({
    type: String
  })
  size: string

  // Особенности: Долго хранится, не требует воды, экологичный стиль
  @Prop({
    type: String
  })
  additionalInfo: string

  // цена
  @Prop({
    type: Number
  })
  price: number
}

export const FlowerSchema = SchemaFactory.createForClass(FlowerClass);