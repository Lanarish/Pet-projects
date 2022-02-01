import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  size:string;

  @Column()
  color:string;

  @Column()
  price:number;

  @Column()
  category_id:number;
}